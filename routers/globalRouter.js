import express from "express";
import { home, join, login, logout } from "../controllers/globalController";
import routes from "../router";

const globalRouter = express.Router();

globalRouter.get(routes.home, (req, res) => home);
globalRouter.get(routes.join, (req, res) => join);
globalRouter.get(routes.login, (req, res) => login);
globalRouter.get(routes.logout, (req, res) => logout);

export default globalRouter;