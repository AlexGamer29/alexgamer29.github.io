import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SignUpForm.css";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { signUp } from "../../../hooks/authSlice";

export default function SignUpForm() {
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const history = useNavigate();

  const [passwordShown, setPasswordShown] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const checkAgreeTerms = () => {
    setAgreeTerms(agreeTerms ? false : true);
  };

  const notify = {
    success: "User Created Successfully",
    error: "Failed to create an account ",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onhandleSubmit = async (data, e) => {
    e.preventDefault();
    const id = toast.loading("Please wait...");
    try {
      const payload = {
        email: data.email,
        password: data.password,
      };
      console.log(payload);
      const registerResult = await dispatch(signUp(payload));
      toast.update(id, {
        render: notify.success,
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
      unwrapResult(registerResult); // MUST HAVE THIS LINE TO CATCH ERROR
    } catch (error) {
      toast.update(id, {
        render: notify.error + `(${error.code})`,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
      console.log(error.code + error);
    }
    setAgreeTerms(false);
    reset();
  };

  useEffect(() => {
    // redirect user to login page if registration was successful
    if (success) history("/login");
    // redirect authenticated user to profile screen
    if (userInfo) history("/dashboard");
  }, [history, userInfo, success]);

  return (
    <>
      <div id="signup__form__container">
        <div id="form__container">
          <div id="form__container__wrap">
            <form onSubmit={handleSubmit(onhandleSubmit)}>
              <div id="form__header">
                <h1 id="form__header-primary">Create an account</h1>
              </div>
              <div id="form__sub__header">
                <h4 id="form__sub__header-primary">
                  Required fields have an asterisk: <span id="asterisk">*</span>{" "}
                </h4>
              </div>
              <div className="field__signup"></div>
              <div id="form__email" className="form__item">
                <h3 id="form__email-title" className="form__field-title">
                  Email*
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
              <div id="form__agree__terms" className="form__item">
                <div id="checkbox__btn">
                  <input
                    type="checkbox"
                    name="terms"
                    onClick={checkAgreeTerms}
                  />
                </div>
                <div id="form__agree__terms-header">
                  I agree to Terms & Conditions and Privacy Policy
                </div>
              </div>
              <div id="form__signup-btn" className="form__item">
                <button id="signup" disabled={agreeTerms ? false : true}>
                  Sign up
                </button>
              </div>
              <div id="form__to-login">
                <span>
                  Already have an account? <Link to="/login">Sign in</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
