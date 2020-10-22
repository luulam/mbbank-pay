import axios, {
  AxiosResponse,
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
} from "axios";
// import * as qs from "query-string"
import CONFIG from "constants/config";
import AuthHelper from "helpers/auth.helper";
import { cleanKeyNull } from "./util.helper";
import * as _ from "lodash";

// GET TOKEN
const authHelper = new AuthHelper();
const profileAuth = authHelper.getProfile();
const token = _.get(profileAuth, "token", false);

const apiUrl = CONFIG.API_GATEWAY.BASE_URL;

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

setTokenAuthorization(token);

function setTokenAuthorization(_token: any) {
  api.defaults.headers.common["Authorization"] = _token
    ? `Bearer ${_token}`
    : "";
}

//GET
function get(url: string, config: AxiosRequestConfig) {
  config = {
    ...config,
    params: {
      lang: authHelper.getLanguage(),
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
function post(
  url: string,
  body: object,
  config: AxiosRequestConfig
): Promise<AxiosResponse<any>> {
  config = {
    ...config,
    params: {
      lang: authHelper.getLanguage(),
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
function put(
  url: string,
  body: object,
  config: AxiosRequestConfig
): Promise<AxiosResponse<any>> {
  config = {
    ...config,
    params: {
      lang: authHelper.getLanguage(),
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
function patch(
  url: string,
  body: object,
  config: AxiosRequestConfig
): Promise<AxiosResponse<any>> {
  config = {
    ...config,
    params: {
      lang: authHelper.getLanguage(),
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
function _delete(
  url: string,
  config: AxiosRequestConfig
): Promise<AxiosResponse<any>> {
  config = {
    ...config,
    params: {
      lang: authHelper.getLanguage(),
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

function sendWithFile(
  baseUrl = undefined,
  url: string,
  method: string,
  body: object = {},
  config = {}
) {
  // method = method.toLowerCase()
  // const formData = new FormData()
  // Object.keys(body).forEach((key) => {
  //   if (_.isArray(body[key]) === true) {
  //     body[key].forEach((item) => {
  //       formData.append(key, item)
  //     })
  //   } else {
  //     formData.append(key, body[key])
  //   }
  // })
  // const configAppend = {
  //   ...config,
  //   headers: { "Content-Type": "multipart/form-data", ...config.headers },
  // }
  // const request = api[method || "POST"](
  //   baseUrl ? `${baseUrl}${url}` : url,
  //   formData,
  //   configAppend
  // )
  //   .then((res) => {
  //     return mapData(res)
  //   })
  //   .catch(mapError)
  // return request
}

function postFormData(url: string, body: object = {}) {
  // const formData = new FormData()
  // Object.keys(body).forEach((key: string) => {
  //   formData.append(key, body[key])
  // })
  // return api
  //   .post(url, formData, {
  //     headers: { "Content-Type": "multipart/form-data" },
  //   })
  //   .then(mapData)
  //   .catch(mapError)
}

// MAP params response
function mapData(res: AxiosResponse): any {
  return res.data;
}

function mapError(err: AxiosError): any {
  if (err.response && err.response.status === 401) {
    authHelper.logout();
    throw err;
  }

  if (err.response && err.response.data) {
    throw err;
  }
}

export default {
  get,
  post,
  patch,
  put,
  delete: _delete,
  sendWithFile,
  postFormData,
  setTokenAuthorization,
};
