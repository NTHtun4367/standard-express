import express from "express";
import cors from "cors";
import router from "./routes/test.js";
import authRouter from "./routes/auth.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.ORIGIN,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.use("/test", router);
app.use("/api/v1", authRouter);

export { app };
