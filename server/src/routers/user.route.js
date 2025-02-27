import { Router } from "express";
import {
  changePassword,
  getUser,
  login,
  logout,
  register,
} from "../controllers/user.controller.js";
import auth from "../middlewares/auth.js";

const router = Router();

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/logout").post(logout);
router.route("/getuser").get(auth, getUser);
router.route("/change-password").get(changePassword);

export default router;
