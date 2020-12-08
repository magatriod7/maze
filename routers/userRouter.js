import express from "express";
import { changePassword, editProfile, userDetail, users } from "../controllers/userController";
import routes from "../router";

const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => users);
userRouter.get(routes.userDetail, (req, res) => userDetail);
userRouter.get(routes.editProfile, (req, res) => editProfile);
userRouter.get(routes.changePassword, (req, res) => changePassword);

export default userRouter;