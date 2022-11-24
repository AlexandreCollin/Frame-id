import express from "express";
import Starton from "../../utils/starton";

const router = express.Router();

router.post("/id-card/:destWallet", (req, res) => {
  Starton.mintMajority(req.params.destWallet);
  res.send("Ok");
});

export default router;
