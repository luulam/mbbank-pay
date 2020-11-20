const axios = require("axios");
const FormData = require("form-data");
const CONFIG = require("../config").default;

async function requestgetToken() {
  let data = new FormData();
  data.append("grant_type", "client_credentials");
  let configParam = {
    method: "post",
    url: CONFIG.url + "/oauth2-server/oauth/token",
    auth: {
      username: CONFIG.username,
      password: CONFIG.password,
    },
    headers: {
      ...data.getHeaders(),
    },
    data: data,
  };
  return await axios(configParam);
}

async function checkToken(req, res, next) {
  if (CONFIG.token === null) {
    CONFIG.token = "asdasdasdasdasd";
    let resAuth = await requestgetToken();
    let { access_token, token_type, expires_in } = resAuth;
    CONFIG.token = access_token;
  }
  next();
}

module.exports = {
  checkToken: checkToken,
};
