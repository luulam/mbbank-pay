// import * as qs from "query-string"
import CONFIG from "constants/config";
import * as AuthHelper from "helpers/auth.helper";
import { cleanKeyNull } from "./util.helper";
import _ from "lodash";
import axios from 'axios'

// GET TOKEN
const profileAuth = AuthHelper.getProfile();
const token = _.get(profileAuth, "token", false);

const apiUrl = CONFIG.API_GATEWAY.BASE_URL;

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const setTokenAuthorization = (_token) => {
  api.defaults.headers.common["Authorization"] = _token
    ? `Bearer ${_token}`
    : "";
}

setTokenAuthorization(token);

//GET
export const GET = (url, config) => {
  config = {
    ...config,
    params: {
      lang: AuthHelper.getLanguage(),
    },
  };
  cleanKeyNull(config.params);

  const request = api
    .get(url, config)
    .then((res) => {
      return mapData(res);
    })
    .catch((err) => {
      mapError(err);
    });
  return request;
}

//POST
export const POST = (url, body, config) => {
  config = {
    ...config,
    params: {
      lang: AuthHelper.getLanguage(),
    },
  };
  cleanKeyNull(config.params);

  const request = api
    .post(url, body, config)
    .then((res) => {
      return mapData(res);
    })
    .catch(mapError);

  return request;
}

//PUT
export const PUT = (url, body, config) => {
  config = {
    ...config,
    params: {
      lang: AuthHelper.getLanguage(),
    },
  };
  cleanKeyNull(config.params);

  const request = api
    .put(url, body, config)
    .then((res) => {
      return mapData(res);
    })
    .catch(mapError);
  return request;
}

// PATCH
export const PATH = (url, body, config) => {
  config = {
    ...config,
    params: {
      lang: AuthHelper.getLanguage(),
    },
  };
  cleanKeyNull(config.params);

  const request = api
    .patch(url, body, config)
    .then((res) => {
      return mapData(res);
    })
    .catch(mapError);
  return request;
}

// DELETE
export const DELETE = (url, config) => {
  config = {
    ...config,
    params: {
      lang: AuthHelper.getLanguage(),
    },
  };
  cleanKeyNull(config.params);

  const request = api
    .delete(url, config)
    .then((res) => {
      return mapData(res);
    })
    .catch(mapError);
  return request;
}

// MAP params response
export const mapData = (res) => {
  return res.data;
}

export const mapError = (err) => {
  if (err.response && err.response.status === 401) {
    AuthHelper.logout();
    throw err;
  }

  if (err.response && err.response.data) {
    throw err;
  }
}
