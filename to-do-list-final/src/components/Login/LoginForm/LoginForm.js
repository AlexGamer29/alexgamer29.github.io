import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../utils/contexts/AuthContext";
// import * as Yup from "yup";

import "./LoginForm.css";
import { signIn } from "../../../hooks/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export default function LoginForm() {
  const { login } = useAuth();
  const dispatch = useDispatch();
  const history = useNavigate();
  const { loading, userInfo, error } = useSelector((state) => state.user);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onhandleSubmit = async (data, e) => {
    const id = toast.loading("Please wait...");
    try {
      const payload = {
        email: data.email,
        password: data.password,
      };
      const signInResult = await dispatch(signIn(payload));
      toast.update(id, {
        render: "Sign in successfully",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
      unwrapResult(signInResult); // MUST HAVE THIS LINE TO CATCH ERROR
    } catch (error) {
      toast.update(id, {
        render: `(${error.code})`,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  useEffect(() => {
    if (userInfo) {
      history("/dashboard");
    }
  }, [history, userInfo]);

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <>
      <div id="login__form__container">
        <div id="form__container">
          <div id="form__container__wrap">
            <form onSubmit={handleSubmit(onhandleSubmit)}>
              <div id="form__header" className="form__item">
                <h1 id="form__header-primary">Sign in to TodoList</h1>
              </div>
              <div id="form__email" className="form__item">
                <h3 id="form__email-title" className="form__field-title">
                  Email
                </h3>
                <input
                  id="form__email-input"
                  className="form__input"
                  placeholder="Email"
                  type="email"
                  name="email"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  })}
                />
                {errors?.email?.type === "required" && (
                  <span className="form__error">This field is required</span>
                )}
                {errors?.email?.type === "pattern" && (
                  <span className="form__error">Use a valid email address</span>
                )}
              </div>
              <div id="form__password" className="form__item">
                <h3 id="form__password-title" className="form__field-title">
                  Password
                </h3>
                <div id="form__password-container">
                  <div id="form__password__sub-container">
                    <div id="form__password__input-container">
                      <span id="form__password__input">
                        <input
                          id="form__password-input"
                          className="form__input"
                          placeholder="Password"
                          type={passwordShown ? "text" : "password"}
                          name="password"
                          {...register("password", {
                            required: true,
                            minLength: 8,
                            maxLength: 30,
                            pattern: /[a-zA-Z]/,
                          })}
                        />
                        <div id="eyes__password">
                          <i
                            onClick={togglePasswordVisiblity}
                            class={
                              passwordShown
                                ? "fa-regular fa-eye-slash"
                                : "fa-regular fa-eye"
                            }
                          />
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
                {errors?.password?.type === "required" && (
                  <span className="form__error">This field is required</span>
                )}
                {errors?.password?.type === "minLength" && (
                  <span className="form__error">
                    Password length minimum is 8 characters
                  </span>
                )}
                {errors?.password?.type === "maxLength" && (
                  <span className="form__error">
                    Password length maximum is 30 characters
                  </span>
                )}
                {errors?.password?.type === "pattern" && (
                  <span className="form__error">
                    Password can only contain Latin letters
                  </span>
                )}
              </div>
              <div id="form__forgot-password" className="form__item">
                <Link to="/forgot-password">
                  <span>Forgot password?</span>
                </Link>
              </div>
              <div id="form__login-btn" className="form__item">
                <button id="signin" type="submit">
                  Sign in
                </button>
              </div>
              <div id="form__to-signup">
                <span>
                  Don't have an account? <Link to="/sign-up">Sign up now</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
