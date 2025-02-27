import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routers/user.route.js";
import restaurantRouter from "./routers/restaurant.route.js";
import itemRouter from "./routers/item.route.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/auth", userRouter);
app.use("/api/restaurant", restaurantRouter);
app.use("/api/item", itemRouter);

export default app;
