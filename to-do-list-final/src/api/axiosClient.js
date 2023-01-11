import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "content-type": "application/json",
  },
//   paramsSerializer: (params) => qs.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  const customHeaders = {
    "access-token": "",
    "uid": "",
    "client": "",
  };

  const accessToken = localStorage.getItem("access-token");
  if (accessToken) {
    customHeaders["access-token"] = accessToken;
  }
  const uid = localStorage.getItem("uid");
  if (uid) {
    customHeaders["uid"] = uid;
  }
  const client = localStorage.getItem("client");
  if (client) {
    customHeaders["client"] = client;
  }

  return {
    ...config,
    headers: {
      ...customHeaders, // auto attach token
      ...config.headers, // but you can override for some requests
    },
  };
});

export default axiosClient;
