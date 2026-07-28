import express from "express"
import { createStudent, getAllStudent } from "../controllers/authController.js"

const router = express.Router()

router.post("/create-student", createStudent)
router.get("/get-all-student", getAllStudent)

export default router;
