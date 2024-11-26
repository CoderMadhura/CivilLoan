const Service=require('../models/services');
const Request=require('../models/requests');


exports.getAllServices = async (req,res)=>{
        try{
            const response= await Service.find();    
            console.log('Services fetched successfully');
            res.send(response).json();
            res.status(200);
        }
        catch(err){
            console.log("Error occurred while  fetching Services",err);
            res.status(500).json({message:`Internal Server Error ${err.message}`});
        }
    };
    exports.addNewService = async (req,res)=>{
        try{
            const data = req.body ;                    
            const newService= new Service(data) ;             
            const response= await newService.save();    
            console.log('Data of new service added successfully');
            res.send(response).json();
            res.status(200);
        }
        catch(err){
            console.log("Error occurred while adding new Service",err);
            res.status(500).json({message:`Internal Server Error ${err.message}`});
        }
    };    


exports.serviceType= async (req,res)=>{
        try{
            const service_type= req.params.type;
            const response = await Service.findOne({type:service_type});
            if(response) {
                console.log('Services with required type fetched successfully');
                res.send(response).json();
                res.status(200);}
            else {
                return res.status(401).json({ message: "Invalid type" });}
            }
        catch(err){
            console.log("Error occurred while fetching service type",err);
            res.status(500).json({message:`Internal Server Error ${err.message}`});  
        }
    };    

exports.serviceTypeForm= async (req, res) => {
        try {
            const service_type  = req.params.type;
            const { mobile, email, amt, msg, code } = req.body;
            const service = await Service.findOne({type:service_type});
            if(service) {
            const newRequest = new Request({
                    mobile,
                    email,
                    amt,
                    type: service_type, 
                    msg,
                    code,
            });   
            const response = await newRequest.save();    
            console.log('Data of new member added');
            res.status(200).send({ message: `member for ${service_type} service saved successfully!`,response });
            }
        }    
        catch (error) {
            res.status(500).send({ error: "An error occurred while processing your request." });
        }
    };