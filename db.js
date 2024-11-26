const mongoose= require('mongoose');

const mongoDB_URL='mongodb://localhost:27017/CivilLoan';

mongoose.connect(mongoDB_URL,{
     useNewUrlParser:true,
     useUnifiedTopology:true
});

const db=mongoose.connection;

db.on('connected',()=>{
  console.log('Connected To MongoDB server');
});

db.on('disconnected',()=>{
     console.log('MongoDB server disconnected');
});

db.on('error',()=>{
     console.log('MongoBD connection error occurred');
});

//exporting DB connection to  Node server
module.exports=db;