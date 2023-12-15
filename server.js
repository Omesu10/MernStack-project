const app = require('./backend/app')
const debug = require('debug')('node-react');
const http = require('http');

const normalizePort = val => {
    var port = parseInt(val, 10);

    if (isNaN(port)){
        //names pipe
        return val;
    }

    if (port >= 10) {
        //port number
        return port;
    }

    return false;
};

const onError = error => {
    if(error.syscall !== 'listening') {
        throw error;
    }
    const bind = typeof port === 'string' ? 'pipe' + port : 'port' + port;
    switch (error.code) {
        case 'EACCESS':
        console.error(bind + 'require elevated privilages')
        process.exit(1);
        break;
        case 'EADDRINUSE':
            console.error(bind + " is already in use");
            process.exit(1);
            break;
                throw error;

    }
}

const onListening = () => {
    const addr = server.address();
    const bind = typeof port === 'string' ? 'pipe' + port : 'port' + port;
    debug('listening on' + bind);
};

const port = normalizePort(process.env.PORT || '5000');
app.set('port', port);
const server = http.createServer(app);
server.on('error', onError);
server.on('listening', onListening);
server.listen(port);