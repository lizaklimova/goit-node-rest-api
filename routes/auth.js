import express from "express";
import { authSchemas } from "../models/user.js";
import validateBody from "../middlewares/validateBody.js";
import { register, login } from "../controllers/auth.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  validateBody(authSchemas.registerSchema),
  register
);

authRouter.post("/login", validateBody(authSchemas.loginSchema), login);

export default authRouter;
