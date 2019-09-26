import axios from "axios";
import Qs from "qs";
import { setHeader } from "../utils/localStore";
const METHOD_GET = "GET";
const METHOD_POST = "POST";
const METHOD_PUT = "PUT";
const METHOD_DELETE = "DELETE";

async function requestAPI(method, url, headers = {}, dataBody) {
  const defaultHeaders = setHeader();
  const config = {
    baseURL: process.env.REACT_APP_DOMAIN,
    url: url,
    headers: {
      ...defaultHeaders,
      ...headers
    },
    method: method,
    paramsSerializer: function(params) {
      return Qs.stringify(params, {
        arrayFormat: "brackets"
      });
    }
  };

  if (method === METHOD_GET) {
    config.params = dataBody;
  } else {
    config.data = dataBody;
  }

  return axios(config)
    .then(async res => {
      return res;
    })
    .catch(err => {
      return new Promise(function(resolve, reject) {
        if (err.response) {
          return reject(err.response);
        }
        return reject(err);
      });
    });
}
export default {
  get(url, dataBody, headers = {}) {
    return requestAPI(METHOD_GET, url, headers, dataBody);
  },

  post(url, dataBody, headers = {}) {
    return requestAPI(METHOD_POST, url, headers, dataBody);
  },

  put(url, dataBody, headers = {}) {
    return requestAPI(METHOD_PUT, url, headers, dataBody);
  },

  delete(url, dataBody, headers = {}) {
    return requestAPI(METHOD_DELETE, url, headers, dataBody);
  }
};
