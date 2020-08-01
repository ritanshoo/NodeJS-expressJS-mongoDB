const http = require('http');
const router = require('./router/appRouting');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request,response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type','text/html');

    // NODE JS Routing
    router.mapRoutes(request,response);
});

server.listen(port,hostname,() => {
    console.log(`Node JS server is started at http://${hostname}:${port}`);
});

