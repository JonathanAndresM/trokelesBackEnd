import express from "express";
import "dotenv/config.js";
import "./config/db.js"
import cors from "cors"
import morgan from "morgan";
import authRoutes from "./routes/authRoutes.js";
import admin from "./routes/admin.js"

const server = express();
const PORT = process.env.PORT

const ready = () => {
  console.log(`Server is running on port ${PORT}`);
};

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(morgan("dev"));

server.get("/", (req, res) => {
  res.send("Hello World");
});
server.use("/api/auth", authRoutes);
server.use("/api/admin", admin)

server.listen(PORT, ready);