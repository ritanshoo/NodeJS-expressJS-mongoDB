const express = require('express');
const path = require('path');
//require('express') returns a function actually so we have to call the function with the variable name that we have choosen ..here it is express

//calling the returned function
const app = express();

const hostname='127.0.0.1';
const port=3000;

//configure static files path
app.use('/public',express.static('public'));

//GET a html tag
app.get('/',(request,response)=>{
    response.send(`<h2 style="color: red">Ritanshu singh welcome to express js</h2>`);
});

// GET HTML FILE
app.get('/home',(request,response)=>{
    response.sendFile(path.join(__dirname,'index.html'));
});

//GET json response
app.get('/json',(request,response)=>{
    let employees = [
        {
            name : 'John',
            age : 40,
            designation : 'Manager'
        },
        {
            name : 'Wilson',
            age : 45,
            designation : 'Sr.Manager'
        },
        {
            name : 'Rajan',
            age : 25,
            designation : 'Software Engineer'
        }
    ];
    response.json(employees);
});

// to download a file from server
app.get('/download',(request,response)=>{
    response.download(path.join(__dirname,'DS_ASSIGNMENT_UNIT_1.pdf'));
});

app.listen(port,hostname,()=>{
    console.log(`server is started at http://${hostname}:${port}`);
});
