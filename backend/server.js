import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import path from "path"; // Correct import
import { fileURLToPath } from "url"; // Import for __filename
import { dirname } from "path"; // Import for dirname

// Get __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// App config
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// DB connection
await connectDB();
console.log("Database connection attempted.");

// Serve static files from the uploads directory
app.use("/images", express.static(path.join(__dirname, "uploads")));

// API endpoints
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API working");
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
