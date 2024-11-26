const Member=require('../models/members');

exports.addNewMember = async (req,res)=>{
    try{
        const data = req.body ;                    
        const newMember= new Member(data) ;             
        const response= await newMember.save();    
        console.log('Data of new Member added successfully');
        res.send(response).json();
        res.status(200);
    }
    catch(err){
        console.log("Error occurred while adding new Member",err);
        res.status(500).json({message:`Internal Server Error ${err.message}`});
    }
};

exports.getAllMembers = async (req,res)=>{
    try{
        const response= await Member.find();    
        console.log('Members fetched successfully');
        res.send(response).json();
        res.status(200);
    }
    catch(err){
        console.log("Error occurred while fetching Members",err);
        res.status(500).json({message:`Internal Server Error ${err.message}`});
    }
};

exports.updateMember = async (req,res)=>{
    try{    
        const id = req.params.id;   
        const { mobile,password} = req.body;
        const member = await Member.findOne({_id:id});
            if (!member) {
                return res.status(404).json({ message: "Member not found" });
            }   
        member.mobile= mobile;
        member.password=password;
        await member.save();         
        res.status(200).json({ message: "Mobile and password  updated sucessfully", updatedMember:member });
    } 
    catch (err) {
        console.error("Error updating member:", err);
        res.status(500).json({ message: `Internal Server Error: ${err.message}` });
    }
    };

    exports.cancelMember = async (req,res)=>{
        try{   
           const id=req.params.id;
           const response = await Member.findByIdAndDelete(id);
               if (!response) {
                   return res.status(404).json({ message: `Member not found for this id ${id}`});
               }
               res.status(200).json({ message: "Member canceled successfully",response});
           } 
       catch (err) {
               console.error("Error canceling member:", err);
               res.status(500).json({ message: `Internal Server Error: ${err.message}` });
           }    
       };