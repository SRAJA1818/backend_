import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import { db_name } from "./constants.js";

const app = express();
const PORT = process.env.PORT || 8000;

(async () => {
  try {
    await mongoose.connect(`${process.env.mongoDBUrl}/${db_name}`);
    console.log("MongoDB connected");

    app.get("/", (req, res) => {
      res.send("Server running 🚀");
    });

    app.listen(PORT, () => {
      console.log(`Server running on PORT ${PORT}`);
    });
  } catch (err) {
    console.error("Startup failed:", err);
  }
})();
