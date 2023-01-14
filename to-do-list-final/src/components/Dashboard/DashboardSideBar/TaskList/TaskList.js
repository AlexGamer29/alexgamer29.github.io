import React from "react";
import { Link, useLocation } from "react-router-dom";
import axiosClient from "../../../../api/axiosClient";
import "./TaskList.css";

function TaskList(props) {
  const location = useLocation();
  const url = process.env.REACT_APP_BASE_URL;
  var config = {
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  };

  async function deleteTask() {
    try {
      const taskListID = location.pathname.split("/")[2];
      console.log(taskListID);
      const deleteTaskURL = `${url}/task_lists/${taskListID}`;
      const response = await axiosClient.delete(deleteTaskURL, config);
      console.log(response);
      await props.fetchTask();
      window.location.reload();
    } catch (error) {
      console.log(error.code + error);
    }
  }

  return (
    <>
      <Link
        to={`/task_lists/${props.taskID}/todos`}
        className="sidebar__list-items-link"
      >
        <div className="list__title">
          <div className="category__title-primary">{props.taskName}</div>
        </div>
        <div className="list__badge">
          <div className="list__badge-container">
            <div className="badge">{props.todoCount}</div>
          </div>
        </div>
        <div>
          <i
            className="fa-solid fa-xmark"
            onClick={() => {
              deleteTask(props.taskID);
            }}
          ></i>
        </div>
      </Link>
    </>
  );
}

export default TaskList;
