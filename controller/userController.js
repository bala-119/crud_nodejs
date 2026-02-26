const service = require("../service/userService");

const getAllUser = async (req, res) => {
    
    let result = await service.getAllUser();
    if (result.status) {
        res.status(201).json({data:result.data,message:result.messagea})
    }
    else {
        res.status(201).json(result).message("Data Fetch Sucess")
    }


}


const deleteUserById = async(req,res)=>{
    let id = req.params.id;
    let result = await service.deleteUserById(id);
    if(result.status)
    {
        res.status(200).json({data:result.data,message:result.message})
    }
    else{
        res.status(201).json({result})
    }
    }



const updateUserById = async (req, res) => {
    let id = req.body.id;
    let name = req.body.name;
    let password = req.body.password;
    let email = req.body.email;
    let result = await service.updateUserById(id,name,password,email);
    if (result.status) {
        res.status(201).json({data:result.data,message:result.message})
    }
    else {
        res.status(201).json(result).message("Data update error")
    }


}
const getUserById = async (req, res) => {
    let id = req.body.id;
    let result = await service.getUserById(id)
    if (result.status) {
        res.status(201).json({data:result.data,message:result.message})
    }
    else {
        res.status(201).json(result).message("Data Fetch Fail")
    }


}

const createUser = async(req,res)=>{
    let name = req.body.name;
    let password = req.body.password;
    let email = req.body.email;
    let result = await service.createUser(name,email,password)
    if(result.status)
    {
         res.status(201).json({data:result.data,message:result.message})
    
    }
    else{
          res.status(201).json(result).message("Data insertion failure")
    }
}


module.exports = {
    getAllUser,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById
}