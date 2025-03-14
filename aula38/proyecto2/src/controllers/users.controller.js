import Users from "../dao/Mongo/Users.js"
import { createHash } from "../utils.js";

const userService = new Users();

const getUsers = async(req,res) =>{
    const result = await userService.getUsers();
    res.send({status:"success",payload:result})
}

const getUser = async(req,res) =>{
    const id = req.params.uid;  // validação de id - de for Mongo, deve ser um ObjectId válido
    const user = await userService.getUserById(id);
    res.send({status:"success",payload:user})
}

// utilização de try/catch para capturar erros

export default {
    getUsers,
    getUser
}