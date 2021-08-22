import {Schema} from 'mongoose';
const WritersSchema = new Schema({
    password: {
        type: String,
        required: [true, "Please enter your password to continue!"],
        maxLength: 80
    },
    email: {
        type: String,
        required: [true, "Please enter a valid mail to continue!"],
        unique: [true, "User with this email already exist!"]
    }

},{timestamps: true});
WritersSchema
.virtual('url')
.get(function(){
    return `/users/writer/${this._id}`;
});
export default WritersSchema;