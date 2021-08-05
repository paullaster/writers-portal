//Middlewares
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import open from 'open';

//Modules APIs
import config from './config/config';
import { userController } from './controller';
//Intialize app
const app = express();

//settings
app.use(express.static(path.join(__dirname,'public')));
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
    console.log(`server running on port: ${config.PORT}`);
   // open(`http://localhost:${config.PORT}/`);
});