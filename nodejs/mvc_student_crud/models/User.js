import mongoose from "mongoose"

const studentSchema = mongoose.Schema({
    firstName: {
        type: String
    },
    age: {
        type: Number
    },
    phone_no: {
        type: String
    },
    email: {
        type: String
    }
})
const User = mongoose.model("user", studentSchema)

export default User;
