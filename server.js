//Middlewares
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';

//Modules APIs
import config from './config/config';
import router from './routes/index'
import { userController } from './routes/users';

//Intialize app
const app = express();

//settings
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//Database connection
mongoose.connect(config.dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    serverSelectionTimeoutMS:3000
}).then(()=>{
    console.log("Database connection was successful");
}).catch((err)=>{
    console.error(`${err}`);
});
const db = mongoose.connection;

//Use controller APIs
app.use('/', router);
app.use('/users', userController);
//starting server
app.listen(config.PORT, ()=>{
    console.log(`server running on port: ${config.PORT}`);
   // open(`http://localhost:${config.PORT}/`);
});