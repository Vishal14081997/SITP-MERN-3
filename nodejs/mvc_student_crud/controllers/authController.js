import User from "../models/User.js"

export const createStudent = async (req, res) => {
    try {
        const { firstName, age, phone_no, email } = req.body;
        const user = await User.create({
            firstName, age, phone_no, email
        })
        res.status(201).json({
            message: "student create",
            data: user
        })

    } catch (error) {
        console.log("createStudent", error.message);
    }
}
export const getAllStudent = async (req, res) => {
    try {
        const user = await User.find()
        if(!user){
            res.status(404).json({message:"user not found"})
        }
        res.status(201).json({
            message: "student get",
            data: user
        })

    } catch (error) {
        console.log("getStudent", error.message);
    }
}
