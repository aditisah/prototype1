//START SERVER
//const path = require('path');
const app = require('./app');
app.use(express.static(_dir +'/dist/polytechnic-web'));
const port = process.env.PORT||3000;
app.listen(port,()=>{
  console.log("server is listening....");
})
  // app.get('/*', (req, sres)=>{
  //   res.sendFile('index.html', { root: 'dist/polytechnic-web' }
  //   );
 // });

