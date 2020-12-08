import express from "express";
import routes from "../router";

const awardRouter = express.Router();

awardRouter.get(routes.awards, (req, res) => res.send("awards"));

export default awardRouter;