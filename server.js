const express=require('express');
const app=express();
const bodyParser=require('body-parser');   
const db=require('./db');                  //importing the DB object

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/home',(req,res)=>{
   res.send('Welcome to CivilLoan Services.....Get all our services at your fingertips, Loans made easy!--->Explore us!');
});


require("./routing/routes")(app);     //exporting the control to routes.app
let PORT=5000;
app.listen(PORT,()=>{
  console.log(`Server listening at port ${PORT}`);
});
