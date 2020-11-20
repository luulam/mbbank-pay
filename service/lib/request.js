const axios = require("axios");
const CONFIG = require("../config").default;

const instance = axios.create({
  baseURL: CONFIG.baseURL,
  timeout: 10000,
  headers: {
    accept: "application/json",
  },
});

async function get(prefix, param) {
  return instance.get(prefix, param);
}

async function post(prefix, param) {
  return instance.get(prefix, param);
}

module.exports = {
  get,
  post,
};
