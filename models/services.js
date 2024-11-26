const mongoose=require('mongoose');

const Service_Schema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Service must have a name"]
    },
    type:{
        type:String,
        required:[true,"Service should have type"]
    },
    code:{
        type:String,
        required:[true,"Service must have a code"],
        unique:[true,"Code should be unique"]
    },
    description:{
        type:String,
        required:[true,"Description is mandatory"]
    },
    imgUrl:{
        type:String,
        required:[true,"Service image is mandatory"]
    },
    details:{
        type:Array,
        required:[true,"Service must have a description"]
    }
});

//Create Services model
const Service= mongoose.model('Service',Service_Schema,'Services');
module.exports=Service;