import express from "express";
import routes from "../router";

const boardRouter = express.Router();

boardRouter.get(routes.board, (req, res) => res.send("board"));
boardRouter.get(routes.noticeBoard, (req, res) => res.send("noticeBoard"));
boardRouter.get(routes.freeBoard, (req, res) => res.send("freeBoard"));
boardRouter.get(routes.questionBoard, (req, res) => res.send("questionBoard"));
boardRouter.get(routes.pictureBoard, (req, res) => res.send("pictureBoard"));


export default boardRouter;