const express = require("express");
const axios = require("axios");
const app = express();
const FormData = require("form-data");

app.get("/", (req, res) => {
  var data = new FormData();
  data.append("grant_type", "client_credentials");

  var config = {
    method: "post",
    url: "http://10.1.27.43:8888/oauth2-server/oauth/token",
    auth: {
      username: "myclient",
      password: "secret",
    },
    headers: {
      ...data.getHeaders(),
    },
    data: data,
  };
  console.log("12312312");
  axios(config)
    .then(function (response) {
      console.log("response");
      res.json(response.data);
    })
    .catch(function (error) {
      console.log("error");
      res.json(error);
    });
});

app.get("/api/helloworld", (req, res) => {
  res.json({ sayHi: "hello from server, nice to meet you!" });
});

app.listen(5000, () => {
  console.log("App listening on port 5000");
});
