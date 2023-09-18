import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
// import mongoose from "mongoose";
import productRoute from "./routes/product.route.js";

dotenv.config({ path: "./.env" });
const app = express();
const port = process.env.PORT || 5001;
app.use(cors());
app.use(express.json());

app.use("/api/products/", productRoute);

connectDB();

// const CONNECTION_URL = 'mongodb+srv://dipjitbaroiofficial:root1234@cluster0.9eq6ixa.mongodb.net';
// mongoose.connect(CONNECTION_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDB Connections successfull");
// });

app.listen(port, () => console.log(`Listening on port ${port}`));
