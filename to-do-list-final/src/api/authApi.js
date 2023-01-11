import axiosClient from "./axiosClient";

const url = process.env.REACT_APP_BASE_URL;

let config = {
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
};

const authApi = {
  signUp: (payload) => {
    const registerUrl = `${url}/auth`;
    return axiosClient.post(registerUrl, JSON.stringify(payload), config);
  },
  signIn: (payload) => {
    const signInUrl = `${url}/auth/sign_in`;
    return axiosClient.post(signInUrl, JSON.stringify(payload), config);
  },
};

export default authApi;
