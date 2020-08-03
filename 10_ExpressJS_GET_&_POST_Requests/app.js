const express = require('express');
const app = express();
const path = require('path');
const router = require('./router/appRouting');
const bodyParser = require('body-parser');


const hostname = '127.0.0.1';
const port = 3000;


// config static files
app.use('/public',express.static('public'));



// express routing
router.mapRoutes(app);

app.listen(port,hostname,()=>{
    console.log(`Express server is started at http://${hostname}:${port}`);
});