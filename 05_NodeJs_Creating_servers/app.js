const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

let server = http.createServer((request,response) => {
    let url = request.url;
    console.log(url);
    response.statusCode = 200;
    response.setHeader('Content-Type','text/html');
    fs.readFile(path.join(__dirname,'index.html'),'utf-8',(err,data) => {
        if(err) throw  err;
        response.end(data);
    });
});

server.listen(port,hostname,() => {
    console.log(`Server is started at http://${hostname}:${port}`);
});
