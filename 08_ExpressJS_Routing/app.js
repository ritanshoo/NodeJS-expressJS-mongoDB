const express = require('express');
const app = express();
const path = require('path');
const router=require('./router/appRouting');

const hostname='127.0.0.1';
const port=3000;

//static files config
app.use('/public',express.static('public'));

// application routing
router.mapRoutes(app,)

app.listen(port,hostname,()=>{
    console.log(`ExpressJS server is started at http://${hostname}:${port}`);
});
