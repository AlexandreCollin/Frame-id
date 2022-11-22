import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.end("Up");
});

export default router;
