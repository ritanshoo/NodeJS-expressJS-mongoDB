// loading / importing the modules
const os = require('os');
const fs = require('fs');
const path = require('path');

// __dirname is a global variable from nodejs
console.log(`dirname : ${__dirname}`);

// __filename is a global variable from nodejs
console.log(`fileName : ${__filename}`);



//total memory
let totalMemory=os.totalmem();
console.log(`total memory : ${totalMemory}`);

// freeMemory
let freeMemory=os.freemem();
console.log(`free memory :${freeMemory}`);

// home direcctory
console.log(`home directory : ${os.homedir()}`);

// hostname/system name
console.log(`HostName : ${os.hostname()}`);

// user info
console.log(`userName : ${os.userInfo().username}`);


// examples of file system modules
let fileContent = 'The following key values are inserted into a B+ ‐ tree in which order of the internal nodes is 3, and that of the leaf nodes is 2, in the sequence given below. The order of internal nodes is the maximum number of tree pointers in each node, and the order of leaf nodes is the maximum number of data items that can be stored in it. The B+ ‐ tree is initially empty. 10, 3, 6, 8, 4, 2, 1 .The maximum number of times leaf nodes would get split up as a result of these insertion is';
fs.writeFile('message.txt',fileContent,'utf-8',(err)=>{
    if(err) throw err;
    console.log('data is saved');
});

// read a file content
fs.readFile('message.txt','utf-8',(err,data) => {
    if(err) throw err;
    console.log(data);
});


let directoryPath = path.join(__dirname,'data','ourEmployee','data.txt');
console.log(`Directory-Path : ${directoryPath}`);

// create a file inside /data/ourEmployee folder
let nestedPath=path.join(__dirname,'data','ourEmployee','ritanshu.txt');
fileContent='The following key values are inserted into a B+ ‐ tree in which order of the internal nodes is 3, and that of the leaf nodes is 2, in the sequence given below. The order of internal nodes is the maximum number of tree pointers in each node, and the order of leaf nodes is the maximum number of data items that can be stored in it. The B+ ‐ tree is initially empty. 10, 3, 6, 8, 4, 2, 1 .The maximum number of times leaf nodes would get split up as a result of these insertion is The following key values are inserted into a B+ ‐ tree in which order of the internal nodes is 3, and that of the leaf nodes is 2, in the sequence given below. The order of internal nodes is the maximum number of tree pointers in each node, and the order of leaf nodes is the maximum number of data items that can be stored in it. The B+ ‐ tree is initially empty. 10, 3, 6, 8, 4, 2, 1 .The maximum number of times leaf nodes would get split up as a result of these insertion is The following key values are inserted into a B+ ‐ tree in which order of the internal nodes is 3, and that of the leaf nodes is 2, in the sequence given below. The order of internal nodes is the maximum number of tree pointers in each node, and the order of leaf nodes is the maximum number of data items that can be stored in it. The B+ ‐ tree is initially empty. 10, 3, 6, 8, 4, 2, 1 .The maximum number of times leaf nodes would get split up as a result of these insertion is';
fs.writeFile(nestedPath,fileContent,'utf-8',(err) => {
    if(err) throw err;
    console.log('data is saved in nastedPath');
});

// read the app_local.js file content and write to "program.txt" in employee folder
fs.readFile(path.join(__dirname,'app.js'),'utf-8',(err,data)=>{
    if (err) throw err;
    // console.log(data);
    fs.writeFile(path.join(__dirname,'data','ourEmployee','program.txt'),data,'utf-8',()=>{
         if(err) throw err;
         console.log('app.js data is saved in program.txt');
     });
});


