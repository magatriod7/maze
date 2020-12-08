import express from "express";
import { boardMember, downloadMember, listMember, member, studyMember } from "../controllers/memberController";
import routes from "../router";

const memberRouter = express.Router();

memberRouter.get(routes.member, member);
memberRouter.get(routes.listMember, listMember);
memberRouter.get(routes.studyMember, studyMember);
memberRouter.get(routes.downloadMember, downloadMember);
memberRouter.get(routes.boardMember, boardMember);

export default memberRouter;