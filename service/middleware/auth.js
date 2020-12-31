const axios = require("axios");
const FormData = require("form-data");
const CONFIG = require("../config").default;

async function requestgetToken() {
  let data = new FormData();

  data.append("grant_type", "client_credentials");
  let configParam = {
    method: "post",
    url: CONFIG.baseURL + "/oauth2-server/oauth/token",
    auth: {
      username: CONFIG.username,
      password: CONFIG.password,
    },
    timeout: 5000,
    headers: {
      ...data.getHeaders(),
    },
    data: data,
  };
  // console.log("CONFIG",configParam)
  return await axios(configParam);
}

async function checkToken(req, res, next) {
  console.log("checkToken B", CONFIG.token);
  let isExpiresToken = false;

  if (CONFIG.timeGetToken !== null && CONFIG.timeExpiresToken !== null) {
    if (CONFIG.timeGetToken + CONFIG.timeExpiresToken >= Date.now()) {
      isExpiresToken = true
    }
  }

  if (CONFIG.token === null || isExpiresToken) {
    try {
      let resAuth = await requestgetToken();
      let { access_token, token_type, expires_in } = resAuth.data;
      CONFIG.token = access_token;
      CONFIG.timeGetToken = Date.now()
      CONFIG.timeExpiresToken = ParseInt(expires_in)
    } catch (error) {
      res.json(error)
    }
  }
  next();
}

module.exports = {
  checkToken: checkToken,
};
