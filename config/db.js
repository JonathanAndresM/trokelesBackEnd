import mongoose from "mongoose";

let db = process.env.URI_MONGO;

async function connectDB() {
  try {
    await mongoose.connect(db);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
}

connectDB();