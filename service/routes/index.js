var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log("kjahsdjkahsjkdhkajsh")
  req.noAuth = true;
  next()
}, function (req, res, next) {
  res.json({ response: "succcess" });
});

module.exports = router;
