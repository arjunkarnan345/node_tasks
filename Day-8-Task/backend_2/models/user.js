import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    studentname:String,
    address:String,
})


const userModels = mongoose.model("stddetails",userSchema)

export default userModels;