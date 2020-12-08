import express from "express";
import { board, freeBoard, noticeBoard, pictureBoard, questionBoard } from "../controllers/boardController";
import routes from "../router";

const boardRouter = express.Router();

boardRouter.get(routes.board, (req, res) => board);
boardRouter.get(routes.noticeBoard, (req, res) => noticeBoard);
boardRouter.get(routes.freeBoard, (req, res) => freeBoard);
boardRouter.get(routes.questionBoard, (req, res) => questionBoard);
boardRouter.get(routes.pictureBoard, (req, res) => pictureBoard);


export default boardRouter;