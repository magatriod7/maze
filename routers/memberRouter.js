import express from "express";
import { boardMember, downloadMember, listMember, member, studyMember } from "../controllers/memberController";
import routes from "../router";

const memberRouter = express.Router();

memberRouter.get(routes.member, (req, res) => member);
memberRouter.get(routes.listMember, (req, res) => listMember);
memberRouter.get(routes.studyMember, (req, res) => studyMember);
memberRouter.get(routes.downloadMember, (req, res) => downloadMember);
memberRouter.get(routes.boardMember, (req, res) => boardMember);

export default memberRouter;