import express from "express";
import dotenv from "dotenv";
import health from "./routes/health/health";
import auth from "./routes/auth/auth";

dotenv.config();

const port = process.env.PORT || 8080;

const app = express();

app.use(express.json());

app.use("/health", health);
app.use("/auth", auth);

app.listen(port, () => console.log(`Api listen on http://127.0.0.1:${port}`));