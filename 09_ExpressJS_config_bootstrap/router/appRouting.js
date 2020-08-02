const path=require('path');


let mapRoutes = function (app) {
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
    app.get('/services',(request,response) => {
        response.sendFile(path.join(__dirname,'..','views','services.html'));
    });

    // profile page
    app.get('/profile',(request,response) => {
        response.sendFile(path.join(__dirname,'..','views','profile.html'));
    });

    // contat page
    app.get('/contact',(request,response) => {
        response.sendFile(path.join(__dirname,'..','views','contact.html'));
    });

    // 404 page
    app.use((request,response) => {
        response.sendFile(path.join(__dirname,'..','views','404.html'));
    });

};

module.exports={
    mapRoutes
};