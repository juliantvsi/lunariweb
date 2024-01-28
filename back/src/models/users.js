import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email:{type: String, required: true, unique: true},
  password: {type: String},
  validated: {type: Boolean, required: false},
  token: {type: String}
})

const User = mongoose.model('User', userSchema, 'users');

export default User;