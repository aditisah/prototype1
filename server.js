//START SERVER
const app = require('./../polytechnic-web/src/backend/app');
app.use(express.static(_dir +'./dist/polytechnic-web'));
const port = process.env.port || 3000;
app.listen(port,()=>{
  console.log("server is listening....");
})
app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'dist/polytechnic-web' }
  );
});

