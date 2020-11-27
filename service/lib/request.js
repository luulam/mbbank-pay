const axios = require("axios");
const CONFIG = require("../config").default;
const { v4: uuidv4 } = require("uuid");





const instance = axios.create({
  baseURL: CONFIG.baseURL,
  timeout: 10000,
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + CONFIG.token,
    clientMessageId: uuidv4(),
    transactionId: uuidv4(),
  },
});

async function get(prefix, option) {
  return instance.get(prefix, option);
}

async function post(prefix, param) {
  return instance.get(prefix, param);
}

module.exports = {
  GET: get,
  POST: post,
};
