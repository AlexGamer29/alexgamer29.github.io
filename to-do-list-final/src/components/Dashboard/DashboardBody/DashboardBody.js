import React from "react";
import "./DashboardBody.css"

function DashboardBody() {
  return (
    <div className="app__body">
      <div className="app__tasks__route">
        <div className="app__tasks__route-toolbar">
          <div className="tasks__toolbar">
            <div className="tasks__toolbar-content">
              <div className="tasks__toolbar-content-container">
                <h1 className="tasks__toolbar-title">
                  <div className="toolbar__title">
                    <span tabindex="0" className="toolbar__title-primary">
                      Personal
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
                      <div className="tasklist__row">
                        <div className="tasklist__item">
                          <div className="tasklist__item-content">
                            <button
                              className="tasklist__item-check-btn"
                              type="button"
                            >
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
                            <div className="tasklist__item-primary-content">
                              <div className="tasklist__item-title">
                                <div className="tasklist__item-title-text">
                                  Ôn tập học kỳ 1
                                </div>
                              </div>
                            </div>
                            <div className="subtasks__action">
                              <div className="subtasks__action__content">
                                <i className="fa-solid fa-check"></i>
                                <i className="fa-solid fa-xmark"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="tasklist__row">
                        <div className="tasklist__item">
                          <div className="tasklist__item-content">
                            <button
                              className="tasklist__item-check-btn"
                              type="button"
                            >
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
                            <div className="tasklist__item-primary-content">
                              <div className="tasklist__item-title">
                                <div className="tasklist__item-title-text">
                                  Mua đồ ăn tối
                                </div>
                              </div>
                            </div>
                            <div className="subtasks__action">
                              <div className="subtasks__action__content">
                                <i className="fa-solid fa-check"></i>
                                <i className="fa-solid fa-xmark"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="tasklist__row">
                        <div className="tasklist__item">
                          <div className="tasklist__item-content">
                            <button
                              className="tasklist__item-check-btn"
                              type="button"
                            >
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
                            <div className="tasklist__item-primary-content">
                              <div className="tasklist__item-title">
                                <div className="tasklist__item-title-text">
                                  Giặt đồ
                                </div>
                              </div>
                            </div>
                            <div className="subtasks__action">
                              <div className="subtasks__action__content">
                                <i className="fa-solid fa-check"></i>
                                <i className="fa-solid fa-xmark"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="left__tasklist-add-btn">
              <form className="tasklist__add-btn">
                <div className="text__field-container">
                  <div className="text__field-container-wrap">
                    <div>
                      <input
                        type="text"
                        className="text__field"
                        placeholder="Click to quickly add a task"
                      />
                    </div>
                  </div>
                </div>
                <button className="add__list-item" type="submit">
                  <div className="add__list-icon">
                    <svg width="15" height="17" viewBox="0 0 15 17">
                      <path
                        fill="currentColor"
                        d="M8.438 3.563l4.593 4.593a.928.928 0 001.312-1.313L8.16.66a.933.933 0 00-1.32 0L.656 6.844a.928.928 0 001.312 1.313l4.595-4.594v10.504c0 .515.417.933.933.933h.008a.933.933 0 00.934-.933V3.563z"
                      ></path>
                    </svg>
                  </div>
                </button>
              </form>
            </div>
          </article>
          <article className="right__tasklist">
            <div className="base__panel">
              <div className="base__panel__container">
                <div className="base__panel__container__wrap">
                  <div className="base__panel__wrap">
                    <div className="top__spacer"></div>
                    <div className="base__panel__root">
                      <header className="breadcrumb">
                        <a href="" className="breadcrumb__container">
                          <div className="breadcrumb__links">
                            My lists to Personal
                          </div>
                        </a>
                        <div className="action__list">
                          <div className="action__list-content">
                            <div className="action__list__item">
                              <i className="fa-solid fa-check"></i>
                            </div>
                            <div className="action__list__item">
                              <i className="fa-solid fa-ellipsis"></i>
                            </div>
                            <div className="action__list__item">
                              <i className="fa-solid fa-xmark"></i>
                            </div>
                          </div>
                        </div>
                      </header>
                      <div className="tasklist__name">
                        <div className="tasklist__name__container">
                          <h1 className="tasklist__name-title">Ôn tập học kỳ 1</h1>
                        </div>
                      </div>
                      <div className="tasklist__notes">
                        <h4 className="tasklist__notes-title">Notes</h4>
                      </div>

                      <div>
                        <div className="text__editor__container">
                          <div className="text__editor__wrap">
                            <textarea
                              id="notes"
                              cols="50"
                              rows="2"
                              placeholder="Insert your notes here..."
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <div className="tasklist__subtasks">
                        <h4 className="tasklist__subtasks-title">Subtasks</h4>
                      </div>

                      <article className="subtasks__list">
                        <div className="subtasks__list__item">
                          <div className="subtasks__list__item-content">
                            <button
                              type="button"
                              className="subtasks__checkbox"
                            ></button>
                            <div className="subtasks__item">
                              <input
                                type="text"
                                value="Math"
                                className="subtasks__item__textfield"
                              />
                            </div>
                            <div className="subtasks__action">
                              <div className="subtasks__action__content">
                                <i className="fa-solid fa-check"></i>
                                <i className="fa-solid fa-xmark"></i>
                              </div>
                            </div>
                          </div>
                          <div className="subtasks__list__item-content">
                            <button
                              type="button"
                              className="subtasks__checkbox"
                            ></button>
                            <div className="subtasks__item">
                              <input
                                type="text"
                                value="Physics"
                                className="subtasks__item__textfield"
                              />
                            </div>
                            <div className="subtasks__action">
                              <div className="subtasks__action__content">
                                <i className="fa-solid fa-check"></i>
                                <i className="fa-solid fa-xmark"></i>
                              </div>
                            </div>
                          </div>
                          <div className="subtasks__list__item-content">
                            <button
                              type="button"
                              className="subtasks__checkbox"
                            ></button>
                            <div className="subtasks__item">
                              <input
                                type="text"
                                value="English"
                                className="subtasks__item__textfield"
                              />
                            </div>
                            <div className="subtasks__action">
                              <div className="subtasks__action__content">
                                <i className="fa-solid fa-check"></i>
                                <i className="fa-solid fa-xmark"></i>
                              </div>
                            </div>
                          </div>
                          <div className="subtasks__list__item-content">
                            <button
                              type="button"
                              className="subtasks__checkbox"
                            ></button>
                            <div className="subtasks__item">
                              <input
                                type="text"
                                value="Science"
                                className="subtasks__item__textfield"
                              />
                            </div>
                            <div className="subtasks__action">
                              <div className="subtasks__action__content">
                                <i className="fa-solid fa-check"></i>
                                <i className="fa-solid fa-xmark"></i>
                              </div>
                            </div>
                          </div>
                          <div className="subtasks__list__item-content">
                            <button
                              type="button"
                              className="subtasks__checkbox"
                            ></button>
                            <div className="subtasks__item">
                              <input
                                type="text"
                                placeholder="Add a new subtask..."
                                className="subtasks__item__textfield-add"
                              />
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div className="bottom__spacer"></div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

export default DashboardBody;
