const db = require("../config/db");

const getAllUser = async () => {
    try {
        const query = "select *from user";
        let [result] = await db.query(query);

        if (result.length >0) {
            return {
                status: true,
                message: " data fetched sucessfully",
                data: result,
                statusCode: 200
            }
        }
        return{
            status: false,
            message: " No record found",
            data: []
        }

    }
    catch(err){
        throw err.message;
    }
    
}

const getUserById = async (id) => {
    try {
        const query = "select *from user where id=?";
        let result =await db.query(query,[id]);

        if (result.length) {
            return {
                status: true,
                message: " data fetched sucessfully",
                data: result[0],
                statusCode: 200
            }
        }
        return{
            status: false,
            message: " No record found",
            data: []
        }

    }
    catch(err){
        throw err.message;
    }
    
}

const createUser = async (name,email,password) => {
    try {
        const query = "insert into user(name,email,password) values(?,?,?)";
        let result = await db.query(query,[name,email,password]);

        if (result.length) {
            return {
                status: true,
                message: " data created sucessfully",
                data: result,
                statusCode: 200
            }
        }
        return{
            status: false,
            message: " No record found",
            data: []
        }

    }
    catch(err){
        throw err.message;
    }
    
}

const deleteUserById = async (id)=>{

    try{
        const query = "delete from user where id = ?";
        let result =await db.query(query,[id]);
        if(result.affectedRows>0)
        {
           return{

            status:true,
            message:`${id} deleted sucessfully`,
            data: [],
            statusCode :200

           } 

        }
        return {
            status: false,
            message: " No record found",
            data: [],
            statusCode:404
        }
    }catch(err){
        throw err;

    }
}

const updateUserById = async (id,name,password,email) => {
    try {
        const query = "update user set name = ?,email = ? , password = ? where id = ?";
        let result = await db.query(query,[name,email,password,id]);

        if (result.length) {
            return {
                status: true,
                message: " data Updated sucessfully",
                data: result,
                statusCode: 200
            }
        }
        return{
            status: false,
            message: " No record found",
            data: []
        }

    }
    catch(err){
        throw err.message;
    }
    
}

module.exports = {
    getAllUser,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById
}