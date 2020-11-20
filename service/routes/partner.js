
var express = require("express");
var router = express.Router();

router.get("/capcha", function (req, res, next) {
  res.send("API is working properly");
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
