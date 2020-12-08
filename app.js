import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import awardRouter from "./routers/awardRouter";
import boardRouter from "./routers/boardRouter";
import competitionRouter from "./routers/competitionRouter";
import exhibitionRouter from "./routers/exhibitionRouter";
import mazeRouter from "./routers/mazeRouter";
import memberRouter from "./routers/memberRouter";
import routes from "./router";

const app = express();

app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.awards, awardRouter);
app.use(routes.board, boardRouter);
app.use(routes.competition, competitionRouter);
app.use(routes.exhibition, exhibitionRouter);
app.use(routes.maze, mazeRouter);
app.use(routes.member, memberRouter);

export default app;