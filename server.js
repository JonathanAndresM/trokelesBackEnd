import express from "express";
import "dotenv/config.js";
import "./config/db.js"
import cors from "cors"
import morgan from "morgan";
import authRoutes from "./routes/authRoutes.js";
import admin from "./routes/admin.js"
import Product from "./models/Products.js";

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

server.post("/api/admin/:id/rate", async (req, res) => {
  const { id } = req.params;
  const { rating, userId } = req.body; // Se recibe también el ID del usuario

  try {
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: "Producto no encontrado" });

    // Buscar si el usuario ya calificó
    const existingReview = product.ratings.reviews.find(review => review.userId.toString() === userId);

    if (existingReview) {
      // Si el usuario ya calificó, actualizamos su calificación
      existingReview.rating = rating;
    } else {
      // Si no ha calificado antes, agregamos una nueva calificación
      product.ratings.reviews.push({ userId, rating });
    }

    // Recalcular el promedio
    const totalRatings = product.ratings.reviews.length;
    const sumRatings = product.ratings.reviews.reduce((acc, review) => acc + review.rating, 0);
    product.ratings.average = totalRatings > 0 ? sumRatings / totalRatings : 0;

    await product.save();
    res.json({ message: "Calificación guardada", average: product.ratings.average });
  } catch (error) {
    res.status(500).json({ message: "Error al guardar la calificación", error });
  }
});

server.listen(PORT, ready);