//START SERVER
const app = require('./app');
//app.use(express.static(_dir +'./dist/polytechnic-web'));
const port = process.env.port || 3000;
app.listen(port,()=>{
  console.log("server is listening....");
})
//  app.get('/*', function (req, sres) {
//    res.sendFile('index.html', { root: 'dist/polytechnic-web' }
//    );
//  });

