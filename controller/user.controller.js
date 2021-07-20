//Import middlewares
import express from 'express';
import { User } from '../database/model';
import sha256 from 'sha256';


//User controller
const userController = express.Router();



//Getting user API
userController.get('/',(req,res)=>{
    User.find({}, (err, result)=>{
      res.status(200).json({
        data: result
      });
    });
    
});
//Creating new user API
userController.post('/add-user',(req,res)=>{
    const { email, password } = req.body;
    const userData = {
        email,
        hashedPassword: sha256(password)
    };
    const newUser = new User(userData);
    newUser
    .save()
    .the((data)=>{
        console.log(data);
        res,status(200).send(data);
    })
    .catch((err)=>{
        console.err(`${err}`);
        res.status(400).send("Unable to save to database");
    });
});

export default userController;