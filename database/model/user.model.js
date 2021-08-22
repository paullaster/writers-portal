//modules
import mongoose from "mongoose";
import StudentSchema from "../schemas/user.schema";

//create model
const Student = mongoose.model('Stduent', StudentSchema);
export default Student;