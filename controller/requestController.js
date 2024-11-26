const Request=require('../models/requests');

exports.addNewRequest = async (req,res)=>{
    try{
        const data = req.body ;                    
        const newRequest= new Request(data) ;             
        const response= await newRequest.save();    
        console.log('Data of new request added successfully');
        res.send(response).json();
        res.status(200);
    }
    catch(err){
        console.log("Error occurred while adding new Request",err);
        res.status(500).json({message:`Internal Server Error ${err.message}`});
    }
};

exports.getAllRequests = async (req,res)=>{
    try{
        const response= await Request.find();    
        console.log('Request fetched successfully');
        res.send(response).json();
        res.status(200);
    }
    catch(err){
        console.log("Error occurred while fetching Request",err);
        res.status(500).json({message:`Internal Server Error ${err.message}`});
    }
};


exports.updateRequest = async (req,res)=>{
    try{    
        const id = req.params.id;   
        const { mobile,type,code} = req.body;
        const request = await Request.findOne({_id:id});
            if (!request) {
                return res.status(404).json({ message: "Request not found" });
            }   
        request.mobile= mobile;
        request.type=type;
        request.code=code;
        await request.save();         
        res.status(200).json({ message: "Mobile and Service type updated sucessfully", updatedRequest:request });
    } 
    catch (err) {
        console.error("Error updating request:", err);
        res.status(500).json({ message: `Internal Server Error: ${err.message}` });
    }
    };

    exports.deleteRequest = async (req,res)=>{
        try{   
           const id=req.params.id;
           const response = await Request.findByIdAndDelete(id);
               if (!response) {
                   return res.status(404).json({ message: `Request not found for this id ${id}`});
               }
               res.status(200).json({ message: "Request deleted successfully",response});
           } 
       catch (err) {
               console.error("Error deleting request:", err);
               res.status(500).json({ message: `Internal Server Error: ${err.message}` });
           }    
       };    