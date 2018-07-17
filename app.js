process.on('unhandledRejection', error => {
    console.log('unhandledRejection', error);
});

process.on('warning', warning => {
    console.log('warning', warning);
});

process.on('uncaughtException', exception => {
    console.log('uncaughtException', exception);
});

process.on('rejectionHandled', rejection => {
    console.log('rejectionHandled', rejection);
});

var config = require('./config/default.js');

var http = require('http'),
    cors = require('cors'),
    express = require('express'),
    app = express(),
    cookieParser = require('cookie-parser'),
    server = http.createServer(app),
    csrf = require('csurf'),
    csrfProtection = csrf(); // eslint-disable-line


var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}


// app.use(cors({origin: 'http://localhost:3000'}))
//     .use('*', allowCrossDomain);
//app.use(cors({origin: 'http://localhost:3000'}));

// Disable x-powered-by
app.disable('x-powered-by');

// Set an xsrf-token for the session if it's enabled
app.use(function(req, res, next) {
    if (req.csrfToken) {
        res.cookie('xsrf-token', req.csrfToken());
    }
    return next();
});

var spotifyRoute = require('./server.js');
app.use('/api', spotifyRoute);

// Intiialize development webpack (hot reloading, etc);
if (app.get('env') !== 'production' && !config.api_work) {
    var webpack = require('webpack'),
        webpackDevMiddleware = require('webpack-dev-middleware'),
        webpackHotMiddleware = require('webpack-hot-middleware'),
        historyApiFallback = require('connect-history-api-fallback'),
        webpackConfig = require('./webpack.dev.config'),
        webpackCompiler = webpack(webpackConfig),
        webpackMiddlewareInstance = webpackDevMiddleware(webpackCompiler, {
            publicPath: webpackConfig.output.publicPath,
            stats: {
                colors: true
            }
        });

    app.use(webpackMiddlewareInstance);
    app.use(historyApiFallback());
    app.use(webpackMiddlewareInstance);

    app.use(
        webpackHotMiddleware(webpackCompiler, {
            log: console.log
        })
    );
    app.use(express.static('static'));
} else {
    // Static files middleware
	app.use(express.static('static'));
    app.use(express.static('build'));
    app.use(function(req, res) {
        res.sendFile(__dirname + '/build/index.html');
    });

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

console.log('Listening on port: ', config.server_port);
server.listen(config.server_port);

module.exports = {
    express,
    app,
    server
};
