import { Router } from 'express';

const router = Router();

const users = [];

router.post('/register',(req,res)=>{
    const user = req.body; // falta validação de dados do body 
    console.log(user); // falta validação da senha
    if(users.length===0) user.id = 1;
    else user.id = users[users.length-1].id+1;
    users.push(user);
    res.send({status:"success",payload:user})
})

export default router;