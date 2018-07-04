require('dotenv').config()
var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var cors = require('cors');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');
var path = require('path');
const fetch = require('node-fetch');
//const app = express()

var router = require('express').Router()

router.use(cors())
      .use(cookieParser());

// //var staticPath = path.join(__dirname, '/');
// app.use(cors())
//     .use(cookieParser())
//     //.use(express.static(staticPath));

const spotifyAPIBaseUri = process.env['SPOTIFY_API_BASE_URI'];
const spotifyAccountsBaseUri = process.env['SPOTIFY_ACCOUNT_BASE_URI'];
const clientId = process.env['SPOTIFY_CLIENT_ID'];
const clientSecret = process.env['SPOTIFY_CLIENT_SECRET']
const refreshToken = process.env['SPOTIFY_REFRESH_TOKEN'];
const redirectUri = process.env['SPOTIFY_REDIRECT_URI'];

let authorizationCode = process.env['SPOTIFY_AUTHORIZATION_TOKEN'] || '';
let accessToken = '';
var stateKey = 'spotify_auth_state';

var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

function requestAuthorizationCode(req, res, next) {
  if (authorizationCode === null || authorizationCode === '') {
    var state = generateRandomString(16);
    res.cookie(stateKey, state);
    scope = 'user-top-read';
    res.redirect(`${spotifyAccountsBaseUri}/api/authorize?` + 
      querystring.stringify({
        response_type: 'code',
        client_id: clientId,
        scope: scope,
        redirect_uri: redirectUri,
        state: state
      }));
  } else {
    next();
  }
}

const refreshAccessToken = () => {
  return fetch(`${spotifyAccountsBaseUri}/api/token`, {
    method: 'POST',
    body: `grant_type=refresh&refresh_token=${refreshToken}`,
    headers: {
      'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
    }
  })
}

const getTopArtists = () => {
  return fetch(`${spotifyAPIBaseUri}/v1/me/top/artists?limit=5`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Accept': 'application/json'
    },
    json: true
  });
}
router.get('/my-top-artists', requestAuthorizationCode, function (req, res) {
    getTopArtists()
      .then((topArtistsResponse) => topArtistsResponse.json())
      .then((topArtistsResponseJSON) => {
        console.log('success!');
        res.status(200).send(topArtistsResponseJSON);
      })
      .catch((err) => {
        console.log('Error: ' + err + '\n');
        refreshAccessToken()
          .then((refreshResponse) => refreshResponse.json())
          .then((refreshResponseJSON) => {
            accessToken = refreshResponseJSON['access_token'];
            getTopArtists()
              .then((topArtistsResponse) => topArtistsResponse.json())
              .then((topArtistsResponseJSON) => {
                res.send(topArtistsResponseJSON)
              })
              .catch((err) => {
                res.status(500).send('Failed to get top artists: ' + err.message);
              })
          })
          .catch((err) => {
            res.status(500).send('Failed to refresh Spotify token: ' + err.message)
          })
      })
  });

router.get('/callback', function(req, res) {
  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;
  if (state === null || state !== storedState) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    res.clearCookie(stateKey);
    authorizationCode = code;
    process.env['SPOTIFY_AUTHORIZATION_TOKEN'] = authorizationCode;
    var authOptions = {
      url: `${spotifyAccountsBaseUri}/api/token`,
      form: {
        code: code,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (Buffer.from(clientId + ':' + clientSecret).toString('base64'))
      },
      json: true
    };
    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        //refreshToken = body.refresh_token;
        process.env['SPOTIFY_REFRESH_TOKEN'] = refreshToken;
        accessToken = body.access_token;
        res.redirect('/my-top-artists');
      } else {
        res.redirect('/#' +
          querystring.stringify({
            error: 'invalid_token'
          }));
      }
    });
  }
});

module.exports = router;

/*
  app.listen(3000)
  app.set('port', process.env.PORT || 3000);

  var server = app.listen(app.get('port'), function() {
      console.log('listening');
  });
*/

// modules.export = {
//   getTopArtists
// }

