
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import userRouter from "./routers/userRouter";
import awardRouter from "./routers/awardRouter";
import globalRouter from "./routers/globalRouter";
import boardRouter from "./routers/boardRouter";
import competitionRouter from "./routers/competitionRouter";
import exhibitionRouter from "./routers/exhibitionRouter";
import mazeRouter from "./routers/mazeRouter";
import memberRouter from "./routers/memberRouter";

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/video", awardRouter);
app.use("/board", boardRouter);
app.use("/competition", competitionRouter);
app.use("/exhibition", exhibitionRouter);
app.use("/maze", mazeRouter);
app.use("/member", memberRouter);

export default app;