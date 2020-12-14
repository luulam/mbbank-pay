var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
var indexRouter = require("./routes/index");
var transcationRouter = require("./routes/transaction");

var app = express();

var AuthStrategy = require("./middleware/auth");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



// router
const PREFIX = "/api/v1";

app.use(PREFIX + "/", indexRouter);
app.use(PREFIX + "/transaction", transcationRouter);
// app.use(AuthStrategy.checkToken);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  console.log("resERR:", res, "reqERR:", req)
  res.json({ response: "ERROR" });
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});


const PORT = 9721;
const HOST = '127.0.0.1';
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
