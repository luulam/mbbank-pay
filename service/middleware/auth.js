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
  if (req.noAuth) next()
  console.log("checkToken B", CONFIG.token);
  if (CONFIG.token === null) {
    try {
      let resAuth = await requestgetToken();
      let { access_token, token_type, expires_in } = resAuth.data;
      CONFIG.token = access_token;
    } catch (error) {
      res.json(error)
    }
  }
  console.log("checkToken A", CONFIG.token);
  next();
}

module.exports = {
  checkToken: checkToken,
};
