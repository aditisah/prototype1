//START SERVER
//const path = require('path');
const express = require('express');
const app = require('./app');
app.use(express.static(__dirname +'/dist'));
const port = process.env.PORT||3000;
app.listen(port,()=>{
  console.log("server is listening....");
})
  // app.get('/*', (req, sres)=>{
  //   res.sendFile('index.html', { root: 'dist/polytechnic-web' }
  //   );
 // });

