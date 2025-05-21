import express from "express";
import dotenv from "dotenv";
import path from 'path'
import cors from 'cors'
import authRoutes from "./routes/auth.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import userRoutes from './routes/detail.routes.js';
import paymentRoutes from './routes/payment.routes.js';
import connectToMongoDB from "./db/connectToMongoDB.js";

import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/app/auth", authRoutes);

app.use("/app/auth/admin", adminRoutes);

app.use("/app/auth/yourdetail", userRoutes);

app.use("/app/auth/payment", paymentRoutes)
// console.log('Loaded environment variables:', process.env);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port ${PORT}`);
});