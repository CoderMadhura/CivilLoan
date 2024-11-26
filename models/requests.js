const mongoose=require('mongoose');

const Request_Schema = new mongoose.Schema({

    mobile:{
        type:Number,
        required:[true,"Must have mobile number"],
        unique:[true,"Mobile no. should be unique"],
        
    },
    email:{
        type:String,
        required:[true,"Must have email"],
        unique:[true,"Email. should be unique"]
    },
    amt:{
        type:Number,
        required:[true,"Amount is mandatory"]
    },
    type:{
        type:String,
        required:[true,"type is mandatory"]
    },
    msg:{
        type:String,
        required:[true,"Msg is mandatory"]
    },
    code:{
        type:String,
        required:[true,"Code is mandatory"]
    }

});

//Create Request model
const Request= mongoose.model('Request',Request_Schema,'Requests');
module.exports=Request;

