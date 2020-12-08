import express from "express";
import routes from "../router";

const mazeRouter = express.Router();

mazeRouter.get(routes.maze, (req, res) => res.send("maze"));
mazeRouter.get(routes.introduceMaze, (req, res) => res.send("introduceMaze"));
mazeRouter.get(routes.ruleMaze, (req, res) => res.send("ruleMaze"));

export default mazeRouter;