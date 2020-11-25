const express = require("express");
const router = express.Router();
const ApiTransaction = require("../api/api-transaction");

router.get("/capcha", async function (req, res, next) {
  try {
    let resCaptra = await ApiTransaction.getCaptra();
    res.json(resCaptra);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/auth-account", async function (req, res, next) {
  try {
    let resAuthAccount = await ApiTransaction.authAcount(req.body);
    res.json(resAuthAccount);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/create-transaction", function (req, res, next) {
  res.send("API is working properly");
});

router.post("/verify-payment", function (req, res, next) {
  res.send("API is working properly");
});

module.exports = router;
