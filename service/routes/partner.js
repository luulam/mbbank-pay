const express = require("express");
const router = express.Router();
const ApiTransaction = require("../api/api-transaction");

router.get("/capcha", async function (req, res, next) {
  console.log("reouter/captra");
  let resCaptra = await ApiTransaction.getCaptra();
  console.log("capcha", resCaptra);
  res.json(resCaptra);
});

router.post("/auth-account", function (req, res, next) {
  res.send("API is working properly");
});

router.post("/create-transaction", function (req, res, next) {
  res.send("API is working properly");
});

router.post("/verify-payment", function (req, res, next) {
  res.send("API is working properly");
});

module.exports = router;
