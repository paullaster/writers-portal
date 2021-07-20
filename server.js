//Middlewares
import express from 'express';
import mongoose from 'mongoose';

//Modules APIs
import config from './config/config';
import { userController } from './controller';
//Intialize app
const app = express();

//Database connection
mongoose.connect(config.dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS:3000
}).then(()=>{
    console.log("Database connection was successful");
}).catch((err)=>{
    console.error(`${err}`);
});
const db = mongoose.connection;

//Use controller APIs
app.use('/', userController);
//starting server
app.listen(config.PORT, ()=>{
    console.log(`server running on port: ${config.PORT}`)
})