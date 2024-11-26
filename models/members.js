const mongoose=require('mongoose');

const Member_Schema = new mongoose.Schema({
    mobile:{
        type:Number,
        required:[true,"Mobile no. is required"],
        unique:[true,"Mobile no. should be unique"],
        
    },
    email:{
        type:String,
        required:[true,"Must have email"],
        unique:[true,"Email. should be unique"]
    },
    occupation:{
        type:String,
        required:[true,"Occupationn is mandatory"]
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        unique:[true,"Password should be unique"]
    }
});

//Create Member model
const Member= mongoose.model('Member',Member_Schema,'Members');
module.exports=Member;