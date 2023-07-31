const { log } = require('console');
const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
  console.log('server created');


  
  // fs.rename('file1.txt','file2.txt',(err)=>{
  //      if (err) throw err
  //      console.log("File Updated");
  //      return res.end();
  // })


  // overide file
  // fs.writeFile('file1.txt',"This is writefile method",(err)=>{
  //    if (err) throw err
  //    console.log("File Updated");
  //    return res.end();
  // })



  // File Opening
  // fs.open('server.js' ,'r',(err)=>{
  // if (err) throw err
  // console.log("File Opened");
  // return res.end();
  // })

  // Deleting existing File
  // fs.unlink('index.html', (err) => {
  //   if (err) throw err
  //   console.log("File Deleted");
  //   return res.end();
  // })




  //  Append in File
  //  fs.appendFile('index.htm','<h1>This is Appendfile</h1>',(err,data)=>{
  //     if(err) throw err
  //     console.log("File Updated");
  //     return res.end();
  //  })

  // Read file
  //  fs.readFile('index.html' ,(err,data)=>{
  //      res.writeHead(200,{'content-type':'text/html'});

  //      res.write(data);
  //     return res.end();
  //  })


}).listen(4000)
