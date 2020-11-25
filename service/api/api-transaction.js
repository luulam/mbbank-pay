const axios = require("axios");
const CONFIG = require("../config").default;
const { v4: uuidv4 } = require("uuid");

async function getCaptra() {
  let config = {
    method: "get",
    url: "http://10.1.27.43:8811/transaction-payments/v1.0/captcha/get",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + CONFIG.token,
    },
  };

  return await axios(config).then((res) => res.data);
}

async function authAcount(param) {
  // param = {
  //   captcha: "",
  //   captchaid,
  //   user:
  //   password,
  //   secureCode
  // }
  var data = JSON.stringify(param);
  console.log("data",data)
  let config = {
    method: "post",
    url: "http://10.1.27.43:8811/transaction-payments/v1.0/auth-account/post",
    headers: {
      "Content-Type": "application/json",
      clientMessageId: uuidv4(),
      transactionId: uuidv4(),
      Authorization: "Bearer " + CONFIG.token,
    },
    data,
  };

  return await axios(config).then((res) => res.data);
}

module.exports = {
  getCaptra,
  authAcount,
};
