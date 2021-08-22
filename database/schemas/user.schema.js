//Import schema and password hashing module
import { Schema } from 'mongoose';
import 'mongoose-type-email';

//create user schema
const StudentSchema = new Schema({
    passowrd: { 
        type: String,
        required: [true,"Please enter your passowrd to continue!"],
        maxLenght: 80
    },
    email:{
        type: String,
        correctTld: true,
        required: [true,"Please enter a valid email to continue!"],
        unique: [true,"User with this email already exist!"]

    }
},{timestamps: true});
/**
 * @param {*} password
 */
//virtual properties
StudentSchema
.virtual('url')
.get(function(){
    return `/users/student/${this._id}`;
});
export default StudentSchema;