import axiosClient from "./axiosClient";

const url = process.env.REACT_APP_BASE_URL;

let config = {
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
};

const todoListApi = {
  getTaskList: (payload) => {
    const getTaskListUrl = `${url}/task_lists/`;
    return axiosClient.get(getTaskListUrl, JSON.stringify(payload), config);
  },
};

export default todoListApi;
