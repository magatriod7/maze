import express from "express";
import { awards } from "../controllers/awardController";
import routes from "../router";

const awardRouter = express.Router();

awardRouter.get(routes.awards, awards);

export default awardRouter;