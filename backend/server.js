import path from "path";
import express from "express";
import { notFound, errorHandler } from "./Middelware/ErrorMiddelware.js";
import productsRoutes from "./Routes/productRoutes.js";
import userRoutes from "./Routes/userRoutes.js";
import OrderRoutes from "./Routes/orderRoutes.js";
import UploadsRoutes from "./Routes/uploadsRoutes.js";
import colors from "colors";
import ConnectDB from "./Config/Db.js";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

dotenv.config();
ConnectDB();
const app = express();
app.use(express.json());
if (process.env.NODE_Mode === "DEVELOPER") {
  app.use(morgan("dev"));
}

const Port = process.env.PORT;

app.use(cors());
app.use("/api/products", productsRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", OrderRoutes);
app.use("/api/upload", UploadsRoutes);
app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE_Mode === "PRODUCTION") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.use(notFound);
app.use(errorHandler);
app.listen(Port, () => {
  console.log(
    `Server is Running in ${process.env.NODE_Mode} mode on port ${Port}`.yellow
      .bold
  );
});
