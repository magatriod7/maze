import express from "express";
import { exhibition } from "../controllers/exhibitionController";
import routes from "../router";

const exhibitionRouter = express.Router();

exhibitionRouter.get(routes.exhibition, exhibition);

export default exhibitionRouter;