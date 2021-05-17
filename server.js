const express = require("express");
const bodyParser=require("body-parser");



const app= express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});



app.post("/",function(req,res){
  var n1=Number(req.body.num1);
  var n2=Number(req.body.num2);
  var sol=n1+n2;
res.send("The answer is "+sol);

});


app.listen(3000,function(){
  console.log("Server has stated on port 3000");
});
