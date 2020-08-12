//START SERVER
const app = require('./app');
//app.use(express.static(__dirname +'/dist'));
const port = process.env.port || 3000;
app.listen(port,()=>{
  console.log("server is listening....");
})
