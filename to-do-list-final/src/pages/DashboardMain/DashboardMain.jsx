import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import axiosClient from "../../api/axiosClient";
import { TaskList, Todo } from "../../components/index";

import ProfileLogo from "../../assets/profile-logo.png";

import "./DashboardMain.css";

const DashboardMain = () => {
  const url = process.env.REACT_APP_BASE_URL;
  const history = useNavigate();
  const location = useLocation();
  const [task, setTask] = useState([]);
  const [toDo, setToDo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedTaskList, setSelectedTaskList] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState();
  const [selectedItem, setSelectedItem] = useState([]);

  var config = {
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const {
    register: updateTodo,
    handleSubmit: handleUpdateTodo,
    reset: resetFieldTodo,
    formState: { errors: errorsTodo },
  } = useForm();

  const {
    register: updateTask,
    handleSubmit: handleUpdateTask,
    reset: resetFieldTask,
    formState: { errors: errorsTask },
  } = useForm();

  const onHandleUpdateTask = async (data, e) => {
    e.preventDefault();
    try {
      const payload = {
        name: data.nameTask,
        description: data.description,
      };
      const taskListID = location.pathname.split("/")[2];
      const updateTaskURL = `${url}/task_lists/${taskListID}`;
      const response = await axiosClient.patch(updateTaskURL, payload, config);
      setLoading(true);
      console.log(response);
    } catch (error) {
      console.log(error.code + error);
    }
    fetchTodo();
    getTask();
    setLoading(false);
    resetFieldTask();
  };

  const onHandleUpdateTodo = async (data, e) => {
    e.preventDefault();
    try {
      const payload = {
        name: data.nameToDo,
        description: data.description,
      };
      const taskListID = location.pathname.split("/")[2];
      const todoID = selectedTodo;
      const updateTodoURL = `${url}/task_lists/${taskListID}/todos/${todoID}`;
      const response = await axiosClient.patch(updateTodoURL, payload, config);
      setLoading(true);
      console.log(response);
    } catch (error) {
      console.log(error.code + error);
    }
    fetchTodo();
    getTask();
    setLoading(false);
    resetFieldTodo();
    setSelectedItem(null);
    setSelectedTodo(null);
  };

  const onHandleCreateTodo = async (data, e) => {
    e.preventDefault();
    try {
      const payload = {
        name: data.toDo,
      };
      const taskListID = location.pathname.split("/")[2];
      const postTodoURL = `${url}/task_lists/${taskListID}/todos`;
      const response = await axiosClient.post(postTodoURL, payload, config);
      setLoading(true);
      console.log(response);
    } catch (error) {
      console.log(error.code + error);
    }
    fetchTodo();
    getTask();
    setLoading(false);
    reset();
  };

  async function fetchTodo() {
    try {
      const taskListID = location.pathname.split("/")[2];
      console.log(taskListID);
      const getTodoURL = `${url}/task_lists/${taskListID}/todos`;
      const response = await axiosClient.get(getTodoURL, config);
      setLoading(true);
      console.log(response);
      setToDo(response.data);
    } catch (error) {
      console.log(error.code + error);
    }
    setLoading(false);
  }

  const getTask = async () => {
    try {
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
    getTask();

    // const timer = setTimeout(() => {
    // }, 1000);
    // return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="app__dashboard">
        <div className="app__sidebar">
          <div className="app__profile__img">
            <img src={ProfileLogo} alt="" className="profile__img" />
          </div>
          <div className="app__sidebar-container">
            <Link
              to="/user-profile"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="app__sidebar__profile">
                <a className="sidebar__userprofile-link">
                  <div>
                    <div className="profile__name">Nguyen Huu Minh Duc</div>
                    <div className="account__subscription">Basic Account</div>
                  </div>
                </a>
              </div>
            </Link>

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
                                  <button
                                    onClick={() => {
                                      fetchTodo();
                                      setSelectedTaskList(item);
                                    }}
                                    style={{
                                      border: "none",
                                      background: "transparent",
                                    }}
                                  >
                                    <TaskList
                                      key={item.id}
                                      taskID={item.id}
                                      taskName={item.name}
                                      todoCount={item.todo_count}
                                    />
                                  </button>
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
        <header className="app__header">
          <div className="app__header-controls">
            <div className="app__header-controls-container">
              <div className="app__header-controls-container-wrap">
                <button className="controls" type="button">
                  <span className="sync__btn">
                    <span className="sync">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M17.166 4.583v4h-4M2.5 15.25v-4h4"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M3.466 7.666a.75.75 0 101.414.5l-1.414-.5zm10.607-1.99l-.53.53a.928.928 0 00.017.017l.513-.546zm2.58 3.454a.75.75 0 001.027-1.093L16.653 9.13zm-13.64 1.573a.75.75 0 00-1.027 1.094l1.028-1.094zm2.58 3.454l.53-.53a.705.705 0 00-.016-.017l-.514.547zm10.607-1.99a.75.75 0 00-1.414-.5l1.414.5zm-11.32-4a5.25 5.25 0 013.79-3.37l-.33-1.462a6.75 6.75 0 00-4.874 4.331l1.414.5zm3.79-3.37a5.25 5.25 0 014.873 1.41l1.06-1.06A6.75 6.75 0 008.34 3.333l.33 1.464zm4.89 1.426l3.093 2.907 1.027-1.093-3.093-2.907-1.027 1.093zM1.986 11.797l3.094 2.906 1.027-1.093-3.093-2.907-1.028 1.094zm3.077 2.89a6.75 6.75 0 006.264 1.812l-.331-1.463a5.25 5.25 0 01-4.872-1.41l-1.061 1.06zm6.264 1.812a6.75 6.75 0 004.873-4.332l-1.414-.5a5.25 5.25 0 01-3.79 3.369l.33 1.463z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </button>
                <button className="controls" type="button">
                  <span className="search__btn">
                    <span className="search">
                      <svg width="24" height="24" viewBox="0 0 24 24">
                        <g
                          fill="none"
                          fill-rule="evenodd"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.6"
                        >
                          <circle cx="11.4" cy="11.4" r="6.4"></circle>
                          <path d="M19.4 19.4l-3.48-3.48"></path>
                        </g>
                      </svg>
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </header>
        <div className="app__body">
          <div className="app__tasks__route">
            <div className="app__tasks__route-toolbar">
              <div className="tasks__toolbar">
                <div className="tasks__toolbar-content">
                  <div className="tasks__toolbar-content-container">
                    <h1 className="tasks__toolbar-title">
                      <div className="toolbar__title">
                        <span tabindex="0" className="toolbar__title-primary">
                          {selectedTaskList.name}
                        </span>
                      </div>
                    </h1>
                    <div className="tasks__toolbar-separator"></div>
                    <div className="tasks__toolbar-nav">
                      <div className="tasks__toolbar-controls">
                        <button className="toolbar__controls" type="button">
                          <svg width="24" height="24" viewBox="3 3 24 24">
                            <circle
                              cx="15"
                              cy="15"
                              r="8.28"
                              fill="transparent"
                              stroke="currentColor"
                              stroke-width="1.6"
                            ></circle>
                            <path
                              d="M17.43 12.625l-4.8 4.8m0-4.8l4.8 4.8"
                              fill="none"
                              fill-rule="evenodd"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.4"
                            ></path>
                          </svg>
                        </button>
                        <button className="toolbar__controls" type="button">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M5.24 7.652l2.439-2.44a.682.682 0 01.982 0l2.44 2.44c.36.36.31.983-.132 1.277-.327.213-.786.148-1.064-.13l-.917-.918v10.282a.839.839 0 01-.835.835.839.839 0 01-.835-.835V7.898l-.884.9a.866.866 0 01-1.064.131.833.833 0 01-.13-1.277zm10.1 11.15a.682.682 0 00.983 0l2.44-2.44a.833.833 0 00-.132-1.277c-.327-.213-.786-.147-1.064.13l-.917.918V5.835A.839.839 0 0015.815 5a.838.838 0 00-.835.835v10.281l-.917-.916A.866.866 0 0013 15.069a.823.823 0 00-.13 1.277L15.34 18.8z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </button>
                        <button className="toolbar__controls" type="button">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.976 12.004a1.6 1.6 0 113.2 0 1.6 1.6 0 01-3.2 0zm-5.566 0a1.6 1.6 0 113.2 0 1.6 1.6 0 01-3.2 0zm-3.986-1.607a1.6 1.6 0 100 3.2 1.6 1.6 0 000-3.2z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section className="app__tasklist">
              <article className="left__tasklist">
                <div className="left__tasklist-content">
                  <div>
                    <div className="spacer"></div>
                    <div className="tasklist">
                      <div className="tasklist__target">
                        <div className="tasklist__task-container">
                          {(loading || toDo) &&
                            toDo.map((item, index) => {
                              return (
                                <button
                                  onClick={() => {
                                    setSelectedItem(item);
                                    setSelectedTodo(item.id);
                                  }}
                                  style={{
                                    border: "none",
                                    background: "transparent",
                                    width: "100%",
                                  }}
                                >
                                  <Todo
                                    key={index}
                                    todoId={item.id}
                                    todoName={item.name}
                                    fetchTodo={fetchTodo}
                                    fetchTask={getTask}
                                    isDone={item.done}
                                  />
                                </button>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="left__tasklist-add-btn">
                  <form
                    className="tasklist__add-btn"
                    onSubmit={handleSubmit(onHandleCreateTodo)}
                  >
                    <div className="text__field-container">
                      <div className="text__field-container-wrap">
                        <div>
                          <input
                            type="text"
                            className="text__field"
                            placeholder="Click to quickly add a task"
                            name="toDo"
                            {...register("toDo", {
                              required: true,
                            })}
                          />
                        </div>
                      </div>
                    </div>
                    <button className="add__list-item">
                      <div className="add__list-icon">
                        <svg width="15" height="17" viewBox="0 0 15 17">
                          <path
                            fill="currentColor"
                            d="M8.438 3.563l4.593 4.593a.928.928 0 001.312-1.313L8.16.66a.933.933 0 00-1.32 0L.656 6.844a.928.928 0 001.312 1.313l4.595-4.594v10.504c0 .515.417.933.933.933h.008a.933.933 0 00.934-.933V3.563z"
                          ></path>
                        </svg>
                      </div>
                    </button>
                    {errors?.toDo?.type === "required" && (
                      <span className="form__error">
                        This field is required
                      </span>
                    )}
                  </form>
                </div>
              </article>
              <article className="right__tasklist">
                <div className="base__panel">
                  <div className="base__panel__container">
                    <div className="base__panel__container__wrap">
                      <div className="base__panel__wrap">
                        {selectedTaskList && (
                          <form
                            onSubmit={handleUpdateTask(onHandleUpdateTask)}
                            style={{ padding: "50px" }}
                          >
                            <label>Task list name:</label>
                            <div className="text__field-container">
                              <div className="text__field-container-wrap">
                                <div>
                                  <input
                                    class="text__field"
                                    defaultValue={selectedTaskList.name}
                                    name="nameTask"
                                    {...updateTask("nameTask", {
                                      required: true,
                                    })}
                                  />
                                </div>
                              </div>
                            </div>
                            {errorsTask?.nameToDo?.type === "required" && (
                              <span className="form__error">
                                This field is required
                              </span>
                            )}
                            <label>Task list description:</label>
                            <div>
                              <div className="text__editor__container">
                                <div className="text__editor__wrap">
                                  <textarea
                                    id="notes"
                                    cols="50"
                                    rows="2"
                                    defaultValue={selectedTaskList.description}
                                    {...updateTask("description")}
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                            <div className="todo_actions_update">
                              <button type="submit" className="button-3">
                                Update
                              </button>
                              <button
                                className="button-1"
                                onClick={() => setSelectedItem(null)}
                              >
                                Cancel
                              </button>
                            </div>
                          </form>
                        )}
                        {selectedItem && (
                          <form
                            onSubmit={handleUpdateTodo(onHandleUpdateTodo)}
                            style={{ padding: "50px" }}
                          >
                            <label>To do name:</label>
                            <div className="text__field-container">
                              <div className="text__field-container-wrap">
                                <div>
                                  <input
                                    class="text__field"
                                    defaultValue={selectedItem.name}
                                    name="nameToDo"
                                    {...updateTodo("nameToDo", {
                                      required: true,
                                    })}
                                  />
                                </div>
                              </div>
                            </div>
                            {errorsTodo?.nameToDo?.type === "required" && (
                              <span className="form__error">
                                This field is required
                              </span>
                            )}
                            <label>Description:</label>
                            <div>
                              <div className="text__editor__container">
                                <div className="text__editor__wrap">
                                  <textarea
                                    id="notes"
                                    cols="50"
                                    rows="2"
                                    defaultValue={selectedItem.description}
                                    {...updateTodo("description")}
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                            <div className="todo_actions_update">
                              <button type="submit" className="button-3">
                                Update
                              </button>
                              <button
                                className="button-1"
                                onClick={() => setSelectedItem(null)}
                              >
                                Cancel
                              </button>
                            </div>
                          </form>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </section>
          </div>
        </div>
      </div>
      <div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1668079078805-d022b985e6aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
            className="background__img"
          />
        </div>
      </div>
    </>
  );
};

export default DashboardMain;
