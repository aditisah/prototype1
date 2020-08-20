//START SERVER
//const path = require('path');
const app = require('./app');
//app.use(express.static(_dir +'./dist/polytechnic-web'));
const {port = 3000,LOCAL_ADDRESS='0.0.0.0/0'} = process.env
app.listen((port,LOCAL_ADDRESS),()=>{
  console.log("server is listening....");
})
  app.get('/*', (req, sres)=>{
    res.sendFile('index.html', { root: 'dist/polytechnic-web' }
    );
  });

