import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/task.routes.js";

const app = express();

app.use(
  cors({
    origin: "http://127.0.0.1:5173",
    credentials: true,
  })
);
app.use(morgan("dev")); // log requests to the
app.use(express.json()); // parse request body as
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", taskRoutes);

export default app;
