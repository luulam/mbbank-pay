const express = require("express");
const router = express.Router();
const ApiTransaction = require("../api/api-transaction");
var AuthStrategy = require("../middleware/auth");

router.get("/capcha", AuthStrategy.checkToken, async function (req, res, next) {
  try {
    console.log("Get capcha")
    let resCaptra = await ApiTransaction.getCaptra();
    res.json(resCaptra);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/auth-account", AuthStrategy.checkToken, async function (req, res, next) {
  try {
    let resAuthAccount = await ApiTransaction.authAcount(req.body);
    console.log("resAuthAccount", resAuthAccount)
    res.json(resAuthAccount);
  } catch (error) {
    console.log("resAuthAccount error", error)
    res.status(500).send(error.response.data);
  }
});

router.post("/create-transaction", AuthStrategy.checkToken, async function (req, res, next) {
  try {
    let rescreateTransaction = await ApiTransaction.createTransaction(req.body);
    console.log("create-transaction", rescreateTransaction)
    res.json(rescreateTransaction);
  } catch (error) {
    console.log("create-transaction error", error)
    res.status(500).send(error.response.data);
  }
});

router.post("/verify-payment", AuthStrategy.checkToken, async function (req, res, next) {
  try {
    let resVerifiPayment = await ApiTransaction.verifyPayments(req.body);
    console.log("verifyPayments: ", resVerifiPayment)
    res.json(resVerifiPayment);
  } catch (error) {
    console.log("verifyPayments error:", error)
    res.status(500).send(error.response.data);
  }
});

module.exports = router;
