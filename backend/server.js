import express from "express";
import cors from "cors";
import "dotenv/config";

// app config
const app = express();

const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());

// API endpoint
app.get("/", (req, res) => {
  res.send("API Working!");
});

app.listen(port, () => console.log("Server is running on port", port));
