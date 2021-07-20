//modules
import mongoose from "mongoose";
import userSchema from "../schemas/user.schema";

//create model
const User = mongoose.model('User', userSchema);
export default User;