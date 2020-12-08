import express from "express";
import { competition } from "../controllers/competitionController";
import routes from "../router";

const competitionRouter = express.Router();

competitionRouter.get(routes.competition, competition);

export default competitionRouter;