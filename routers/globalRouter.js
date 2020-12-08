import express from "express";
import { getJoin, home, login, logout, postJoin } from "../controllers/globalController";
import routes from "../router";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;