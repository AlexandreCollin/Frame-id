import express from "express";
import User from "./models/user";
import { createUser, selectUserByEmail } from "../../../db/users/users";
import crypto from "crypto";

const router = express.Router();

router.post("/register", (req, res) => {
  const user: User = req.body;

  if (user.email == undefined || user.password == undefined) {
    return res.status(400).send("Bad request");
  }

  user.password = crypto
    .createHash("sha256")
    .update(user.password)
    .digest("hex");

  selectUserByEmail(user.email)
    .then((value) => {
      if (value != null) {
        return res.status(400).send("Already exists");
      }
      createUser(user)
        .then((value) => {
          return res.status(200).send("Success");
        })
        .catch((e) => {
          return res.status(500).send("Internal error");
        });
    })
    .catch((e) => {
      res.status(500).send("Internal error");
    });
});

router.post("/login", (req, res) => {
  const user: User = req.body;

  if (user.email == undefined || user.password == undefined) {
    return res.status(400).send("Bad request");
  }

  selectUserByEmail(user.email)
    .then((value) => {
      const dbUser: User = value;

      user.password = crypto
        .createHash("sha256")
        .update(user.password)
        .digest("hex");

      if (dbUser.password != user.password) {
        return res.status(400).send("Bad request");
      }
      return res.status(200).send("Success");
    })
    .catch((value) => {
      return res.status(400).send("Bad request");
    });
});

export default router;
