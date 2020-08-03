const path=require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

let mapRoutes = function (app) {

    // configure the body parser
    const urlencodedParser = bodyParser.urlencoded({extended:false});


    // Express Routing

    // home page
    app.get('/',(request,response) => {
        response.sendFile(path.join(__dirname,'..','views','index.html'));
    });

    // about page
    app.get('/about',(request,response) => {
        response.sendFile(path.join(__dirname,'..','views','about.html'));
    });

    // services page
    //GET Req for queries String
    app.get('/services',(request,response) => {
        let queries=request.query;
        console.log(queries);
        response.sendFile(path.join(__dirname,'..','views','services.html'));
    });

    // profile page
    app.get('/profile',(request,response) => {
        response.sendFile(path.join(__dirname,'..','views','profile.html'));
    });

    // profile page with id(dynamic value)
    app.get('/profile/:id',(request,response) => {
        let selectedID = Number.parseInt(request.params.id);
        fs.readFile(path.join(__dirname,'..','database','profile.json'),'utf-8',(err,data)=>{
            if(err) throw err;
            let profiles = json.parse(data);
            let selectedProfile = profiles.find(function (profile) {
                return profile.id === selectedID;
            });
            console.log(selectedProfile);
        });
        response.sendFile(path.join(__dirname,'..','views','profile.html'));
    });

    // contat page
    app.get('/contact',(request,response) => {
        response.sendFile(path.join(__dirname,'..','views','contact.html'));
    });

    // post req
    app.post('/contact-form',urlencodedParser,(request,response )=>{
        let contactFormData = request.body;
        console.log(contactFormData);
        response.sendFile(path.join(__dirname,'..','views','contact.html'));
    })


    // 404 page
    app.use((request,response) => {
        response.sendFile(path.join(__dirname,'..','views','404.html'));
    });

};

module.exports={
    mapRoutes
};