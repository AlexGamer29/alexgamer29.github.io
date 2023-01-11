import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "./DashboardSideBar.css";

import { getTaskList } from "../../../hooks/taskListSlice";
import TaskList from "./TaskList/TaskList";
import axiosClient from "../../../api/axiosClient";

function DashboardSideBar() {
  const url = process.env.REACT_APP_BASE_URL;
  const history = useNavigate();

  const [task, setTask] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTask = async () => {
    try {
      // const getTaskResult = await dispatch(getTaskList());
      // unwrapResult(getTaskResult); // MUST HAVE THIS LINE TO CATCH ERROR

      var config = {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      };

      const getTaskListURL = `${url}/task_lists`;
      const response = await axiosClient.get(getTaskListURL, config);
      setLoading(true);
      console.log(response);
      setTask(response.data);
    } catch (error) {
      console.log(error.code + error);
    }
    setLoading(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getTask();
    }, 60000);
    return () => clearTimeout(timer);
  }, [task]);

  return (
    <div className="app__sidebar">
      <div className="app__profile__img">
        <img src="" alt="" className="profile__img" />
      </div>
      <div className="app__sidebar-container">
        <div className="app__sidebar__profile">
          <a className="sidebar__userprofile-link">
            <div>
              <div className="profile__name">Nguyen Huu Minh Duc</div>
              <div className="account__subscription">Basic Account</div>
            </div>
          </a>
        </div>
        <div className="app__sidebar__nav">
          <div className="sidebar__nav-container">
            <div className="sidebar__nav-container-wrap">
              <ul className="sidebar__nav-items">
                <li className="sidebar__nav-item">
                  <ul className="sidebar__ul">
                    <li className="sidebar__group-items">
                      <a href="" className="sidebar__group-items-link">
                        <div className="category__icon">
                          <div className="icon__container">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              style={{
                                width: "100%",
                                height: "100%",
                                transform: "translate3d(0,0,0)",
                                contentVisibility: "visible",
                              }}
                            >
                              <defs>
                                <clipPath id="a">
                                  <path d="M0 0h24v24H0z" />
                                </clipPath>
                              </defs>
                              <g
                                style={{
                                  display: "block",
                                }}
                                clipPath="url(#a)"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  stroke="#030303"
                                  strokeWidth={1.6}
                                  d="M14.625 21h-8.5C4.951 21 4 20.194 4 19.2V4.8C4 3.806 4.951 3 6.125 3h12.75C20.049 3 21 3.806 21 4.8v14.6a1.6 1.6 0 0 1-1.6 1.6h-4.775zM16 11.5H8M16 8H8M10 15H8"
                                  fill="none"
                                />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="category__title">
                          <div className="category__title-primary">
                            All tasks
                          </div>
                        </div>
                        <div className="category__badge">
                          <div className="category__badge-container">
                            <div className="badge">99+</div>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar__nav-item">
                  <div>
                    <div className="sidebar__heading-item">
                      <div className="sidebar__heading-item-container">
                        <div className="sidebar__heading-title">
                          <div className="sidebar__heading-title-text">
                            My lists
                          </div>
                        </div>
                      </div>
                      <div className="sidebar__heading-utils">
                        <div className="sidebar__heading-add-btn">
                          <button className="add-btn" type="button">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="24"
                              height="24"
                            >
                              <defs>
                                <path
                                  id="id_2"
                                  d="M11.6 5.2a.8.8 0 0 1 .794.7l.006.1-.001 4.799 4.801.001a.8.8 0 0 1 .1 1.594l-.1.006-4.801-.001.001 4.801a.8.8 0 0 1-1.594.1l-.006-.1-.001-4.801L6 12.4a.8.8 0 0 1-.1-1.594L6 10.8l4.799-.001L10.8 6a.8.8 0 0 1 .8-.8z"
                                ></path>
                              </defs>
                              <g fill="none" fill-rule="evenodd">
                                <mask id="id_3" fill="#fff">
                                  <use xlinkHref="#id_2"></use>
                                </mask>
                                <use
                                  fill="currentColor"
                                  fill-rule="nonzero"
                                  xlinkHref="#id_2"
                                ></use>
                                <g fill="currentColor" mask="url(#id_3)">
                                  <path d="M0 0h24v24H0z"></path>
                                </g>
                              </g>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ul className="sidebar__ul-list">
                      <li className="sidebar__list-items">
                        {(loading || task) &&
                          task.map((item, index) => {
                            return (
                              <TaskList
                                taskID={item.id}
                                taskName={item.name}
                                todoCount={item.todo_count}
                              />
                            );
                          })}
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardSideBar;
