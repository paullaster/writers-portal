//Import middlewares
import express from 'express';
import { Student,  } from '../database/model';
import sha256 from 'sha256';
import path from 'path';

//Top level app
const app = express();
//setting app default middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//User controller
const userController = express.Router();

//user setting 
userController.use(express.static(path.join(__dirname, 'public')));

//Getting user API
userController.get('/',(req,res)=>{
     Student.find({}, (err, result)=>{
       res.status(200).json({
         data: result
       });
     });
    res.sendFile('index.html', (err)=>{
        console.error(err);
    });
});
//Creating new user API
userController.post('/add-user',(req,res)=>{
    const { email, password:plainTextPassword } = req.body;
    password = sha256(plainTextPassword);
    const userData = {
        email,
        password,
    };
    const newUser = new Student(userData);
    console.log(req.body, newUser);
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
userController.post('/student-login',(req,res)=>{
    console.log(req.body);
})

export {
     userController
};