require('dotenv').config()
var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var cors = require('cors');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');
const fetch = require('node-fetch');
const app = express()
app.use(cors())
    .use(cookieParser());

const spotifyAPIBaseUri = 'https://api.spotify.com'
const spotifyAccountsBaseUri = 'https://accounts.spotify.com'

const clientId = process.env['SPOTIFY_CLIENT_ID'];
const clientSecret = process.env['SPOTIFY_CLIENT_SECRET']
let refreshToken = process.env['SPOTIFY_REFRESH_TOKEN'];
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
  console.log('refresh token');
  return fetch(`${spotifyAccountsBaseUri}/api/token`, {
    method: 'POST',
    body: `grant_type=refresh&refresh_token=${refreshToken}`,
    headers: {
      'Authorization': `Basic ${new Buffer(`${clientId}:${clientSecret}`).toString('base64')}`
    }
  })
}

const getTopArtists = () => {
  console.log('accessToken: ' + accessToken);
  console.log('authorizationCode: ' + authorizationCode);
  return fetch(`${spotifyAPIBaseUri}/v1/me/player/top/artists?limit=5/`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
}

app.get('/callback', function(req, res) {
  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;
  console.log('finished callback');

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
        'Authorization': 'Basic ' + (new Buffer(clientId + ':' + clientSecret).toString('base64'))
      },
      json: true
    };
    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        refreshToken = body.refresh_token;
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



app.get('/my-top-artists', requestAuthorizationCode, function (req, res) {
  console.log('hit get my top artists');

  getTopArtists()
    .then((topArtistsResponse) => topArtistsResponse.json())
    .then((topArtistsResponseJSON) => {
      res.send(topArtistsResponseJSON);
    })
    .catch(() => {
      refreshAccessToken()
        .then((refreshResponse) => refreshResponse.json())
        .then((refreshResponseJSON) => {
          accessToken = refreshResponseJSON['access_token'];
          getTopArtists()
            .then((topArtistsResponse) => topArtistsResponse.json())
            .then((topArtistsResponseJSON) => {
              res.send(topArtistsResponseJSON)
            })
            .catch(() => {
              res.status(500).send('Failed to get top artists');
            })
        })
        .catch(() => {
          res.status(500).send('Failed to refresh Spotify token')
        })
    })


});



app.listen(8888)