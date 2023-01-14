import { unwrapResult } from "@reduxjs/toolkit";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import axiosClient from "../../api/axiosClient";
import logout from "../../hooks/authSlice";
import "./ChangePassword.css";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function ChangePassword() {
  const url = process.env.REACT_APP_BASE_URL;
  const history = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  var config = {
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  };

  const handleChangePassword = async (data, e) => {
    e.preventDefault();
    await sleep(1000);
    if (data.password == "" || data.passwordConfirmation == "") {
      alert("Mật khẩu trống");
    } else if (data.password != data.passwordConfirmation) {
      alert("Mật khẩu không giống nhau");
    } else if (data.password == data.passwordConfirmation) {
      alert("Mật khẩu đã nhập đúng");
      try {
        const payload = {
          user: {
            password: data.password,
            password_confirmation: data.password,
          },
        };
        console.log(payload);
        const userProfileURL = `${url}/auth`;
        const response = await axiosClient.patch(
          userProfileURL,
          payload,
          config
        );
        alert(
          "Change password " + response.data.status.toString().concat("fully")
        );
        const logOut = await dispatch(logout());
        unwrapResult(logOut); // MUST HAVE THIS LINE TO CATCH ERROR
        console.log(response);
        history("/");
      } catch (error) {}
    }
  };

  return (
    <div class="app__forgot__password">
      <div id="login__form__container">
        <div id="form__container">
          <div id="form__container__wrap">
            <form onSubmit={handleSubmit(handleChangePassword)}>
              <div id="form__header" class="form__item">
                <h1 id="form__header-primary">Change your password</h1>
              </div>
              <div id="form__password" class="form__item">
                <h3 id="form__password-title" class="form__field-title">
                  New password
                </h3>
                <div id="form__password-container">
                  <div id="form__password__sub-container">
                    <div id="form__password__input-container">
                      <span id="form__password__input">
                        <input
                          class="form__input form__password-input"
                          placeholder="Enter new password"
                          type="password"
                          name="password"
                          {...register("password")}
                        />
                        <div id="eyes__password">
                          <i
                            onClick="{togglePasswordVisiblity}"
                            class="fa-regular fa-eye"
                          ></i>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div id="form__password" class="form__item">
                <h3 id="form__password-title" class="form__field-title">
                  Confirm new password
                </h3>
                <div id="form__password-container">
                  <div id="form__password__sub-container">
                    <div id="form__password__input-container">
                      <span id="form__password__input">
                        <input
                          class="form__input form__password-input"
                          placeholder="Re-enter new password"
                          type="password"
                          name="password"
                          {...register("passwordConfirmation")}
                        />
                        <div id="eyes__password">
                          <i
                            onClick="{togglePasswordVisiblity}"
                            class="fa-regular fa-eye"
                          ></i>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div id="form__reset__password-btn" class="form__item">
                <button id="signin" type="submit">
                  Change password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
