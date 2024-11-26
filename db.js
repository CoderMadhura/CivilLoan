const mongoose= require('mongoose');

const mongoDB_URL='mongodb+srv://Prathamesh:5ZvtJazQdwFG6yX7@cluster0.35m0yld.mongodb.net/NodeDB1?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoDB_URL);

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