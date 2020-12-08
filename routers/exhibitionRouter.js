import express from "express";
import routes from "../router";

const exhibitionRouter = express.Router();

exhibitionRouter.get(routes.awards, (req, res) => res.send("awards"));

export default exhibitionRouter;