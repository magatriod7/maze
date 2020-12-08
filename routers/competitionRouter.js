import express from "express";
import routes from "../router";

const competitionRouter = express.Router();

competitionRouter.get(routes.competition, (req, res) => res.send("competitionRouter"));

export default competitionRouter;