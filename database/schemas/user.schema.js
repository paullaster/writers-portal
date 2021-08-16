//Import schema and password hashing module
import { Schema } from "mongoose";
import sha256 from "sha256";

//create user schema
const userSchema = new Schema({
    hashedPassowrd: { 
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
},{timestamps: true});
/**
 * @param {*} password
 */
userSchema.methods.comparePassword = function comparePassword(password){
    return this.hashedPassowrd === sha256(password);
}
export default userSchema;