import express from "express";
import dotenv from "dotenv";
import health from "./routes/health";
import auth from "./routes/auth";
import doc from "./routes/docs";
import smartContract from "./routes/smart_contracts";

dotenv.config();

const port = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE",
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, content-type, authorization",
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

app.use("/health", health);
app.use("/auth", auth);
app.use("/doc", doc);
app.use("/smart-contract", smartContract);

app.listen(port, () => console.log(`Api listen on http://127.0.0.1:${port}`));
