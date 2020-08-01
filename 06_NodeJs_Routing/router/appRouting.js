const fs = require('fs');
const path  = require('path');

let mapRoutes = function(request,response) {
    let url = request.url;

    // node js routing
    if(url === '/'){
        fs.readFile(path.join(__dirname,'..','views','index.html'),'utf-8',(err,data) => {
            if(err) throw  err;
            response.end(data);
        });
    }
    else if(url === '/about'){
        fs.readFile(path.join(__dirname,'..','views','about.html'),'utf-8',(err,data) => {
            if(err) throw  err;
            response.end(data);
        });
    }
    else if(url === '/profile'){
        fs.readFile(path.join(__dirname,'..','views','profile.html'),'utf-8',(err,data) => {
            if(err) throw  err;
            response.end(data);
        });
    }
    else if(url === '/contact'){
        fs.readFile(path.join(__dirname,'..','views','contact.html'),'utf-8',(err,data) => {
            if(err) throw  err;
            response.end(data);
        });
    }
    else {
        fs.readFile(path.join(__dirname,'..','views','404.html'),'utf-8',(err,data) => {
            if(err) throw  err;
            response.end(data);
        });
    }
};

module.exports = {
    mapRoutes
};
