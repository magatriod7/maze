import express from "express";
import { competition } from "../controllers/competitionController";
import routes from "../router";

const competitionRouter = express.Router();

competitionRouter.get(routes.competition, (req, res) => competition);

export default competitionRouter;