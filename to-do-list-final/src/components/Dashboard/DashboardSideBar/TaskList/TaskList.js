import React from "react";
import { Link } from "react-router-dom";
import "./TaskList.css";

function TaskList(props) {
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
      </Link>
    </>
  );
}

export default TaskList;
