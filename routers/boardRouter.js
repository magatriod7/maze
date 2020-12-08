import express from "express";
import { board, freeBoard, noticeBoard, pictureBoard, questionBoard } from "../controllers/boardController";
import routes from "../router";

const boardRouter = express.Router();

boardRouter.get(routes.board, board);
boardRouter.get(routes.noticeBoard, noticeBoard);
boardRouter.get(routes.freeBoard, freeBoard);
boardRouter.get(routes.questionBoard, questionBoard);
boardRouter.get(routes.pictureBoard, pictureBoard);


export default boardRouter;