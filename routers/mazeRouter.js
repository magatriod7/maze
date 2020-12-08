import express from "express";
import { introduceMaze, maze, ruleMaze } from "../controllers/mazeController";
import routes from "../router";

const mazeRouter = express.Router();

mazeRouter.get(routes.maze, (req, res) => maze);
mazeRouter.get(routes.introduceMaze, (req, res) => introduceMaze);
mazeRouter.get(routes.ruleMaze, (req, res) => ruleMaze);

export default mazeRouter;