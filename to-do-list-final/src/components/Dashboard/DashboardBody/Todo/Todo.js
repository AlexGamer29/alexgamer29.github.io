import React, { useState } from "react";
import { useLocation } from "react-router";
import axiosClient from "../../../../api/axiosClient";

function Todo(props) {
  const [loading, setLoading] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const location = useLocation();

  const url = process.env.REACT_APP_BASE_URL;
  var config = {
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  };

  const toggleIsCheck = () => {
    setIsCheck(isCheck ? false : true);
  };

  async function deleteTodo(id) {
    try {
      const taskListID = location.pathname.split("/")[2];
      console.log(taskListID);
      const deleteTodoURL = `${url}/task_lists/${taskListID}/todos/${id}`;
      const response = await axiosClient.delete(deleteTodoURL, config);
      setLoading(true);
      console.log(response);
      await props.fetchTodo();
      await props.fetchTask();
    } catch (error) {
      console.log(error.code + error);
    }
    setLoading(false);
  }

  async function checkTodo(id, checkBool) {
    try {
      const payload = {
        done: checkBool,
      };
      const taskListID = location.pathname.split("/")[2];
      console.log(taskListID);
      const checkTodoURL = `${url}/task_lists/${taskListID}/todos/${id}`;
      const response = await axiosClient.patch(checkTodoURL, payload, config);
      setLoading(true);
      console.log(response);
      await props.fetchTodo();
      await props.fetchTask();
    } catch (error) {
      console.log(error.code + error);
    }
    setLoading(false);
  }

  return (
    <>
      <div className="tasklist__row" key={props.taskID}>
        <div className="tasklist__item" key={props.todoId}>
          <div className="tasklist__item-content">
            <button className="tasklist__item-check-btn" type="button">
              <div className="check__btn">
                <svg width="10" height="10" viewBox="0 0 14 12">
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    stroke="currentColor"
                    stroke-width=".4"
                    d="M4.959 9.263l6.792-8.015a.71.71 0 0 1 .995-.082c.3.249.34.69.09.984l-7.29 8.602a.706.706 0 0 1-.708.228.706.706 0 0 1-.483-.248L1.165 6.97a.694.694 0 0 1 .09-.987.712.712 0 0 1 .996.085l2.708 3.195z"
                  ></path>
                </svg>
              </div>
            </button>

            <div
              className={
                "tasklist__item-primary-content" &&
                (props.isDone ? "strikethrough" : "")
              }
            >
              <div className="tasklist__item-title">
                <div className="tasklist__item-title-text">
                  {props.todoName}
                </div>
              </div>
            </div>
            <div className="subtasks__action">
              <div
                className="subtasks__action__content"
                onClick={() => {
                  toggleIsCheck();
                  checkTodo(props.todoId, isCheck);
                }}
              >
                <i className="fa-solid fa-check"></i>
                <i
                  className="fa-solid fa-xmark"
                  onClick={() => {
                    deleteTodo(props.todoId);
                  }}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
