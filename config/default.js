module.exports = {
    start_server: parseBool(process.env.START_SERVER, true),
    app_name: process.env.APP_NAME || 'Shashank Murching',
    env: process.env.NODE_ENV || 'development',
    development: process.env.NODE_ENV !== 'production',
    production: process.env.NODE_ENV === 'production',
    service: process.env.SERVICE || 'shashank_website',
    host: process.env.HOST || 'https://shashankmurching.com',
    secret: process.env.SECRET || 'shashank',
    server_port: process.env.PORT || 3000
};

function parseBool(value, default_value) {
    if (typeof value === 'undefined') {
        return default_value;
    } else {
        return value === 'true';
    }
}
