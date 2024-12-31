import express from "express";
import { login, signUp } from "../Controllers/userController.js";
import { loginValidation, signupValidation } from "../Middleware/Auth.js";

const router = express.Router();

// Register
router.post("/signup", signupValidation, signUp);

// Login
router.post("/login", loginValidation, login);

export default router;
