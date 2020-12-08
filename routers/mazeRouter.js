import express from "express";
import { introduceMaze, maze, ruleMaze } from "../controllers/mazeController";
import routes from "../router";

const mazeRouter = express.Router();

mazeRouter.get(routes.maze, maze);
mazeRouter.get(routes.introduceMaze, introduceMaze);
mazeRouter.get(routes.ruleMaze, ruleMaze);

export default mazeRouter;