import express from "express";
import routes from "../router";

const memberRouter = express.Router();

memberRouter.get(routes.member, (req, res) => res.send("member"));
memberRouter.get(routes.listMember, (req, res) => res.send("listMember"));
memberRouter.get(routes.studyMember, (req, res) => res.send("studyMember"));
memberRouter.get(routes.downloadMember, (req, res) => res.send("downloadMember"));
memberRouter.get(routes.boardMember, (req, res) => res.send("boardMember"));

export default memberRouter;