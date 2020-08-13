//START SERVER
const app = require('./src/backend/app');
app.use(express.static('./dist/polytechnic-web'));
const port = process.env.port || 3000;
app.listen(port,()=>{
  console.log("server is listening....");
})
// app.get('/*',(req,res)=>{
//   res.sendFile(path.join(__dirname + '/dist/polytechnic-web/index.html'));
// })
