import React, { useEffect } from "react";
import "./UserProfile.css";
import ProfileLogo from "../../assets/profile-logo.png";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axiosClient from "../../api/axiosClient";
import { useForm } from "react-hook-form";

function UserProfile(props) {
  const url = process.env.REACT_APP_BASE_URL;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  var config = {
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  };

  const handleSubmitUserName = async (data, e) => {
    e.preventDefault();
    try {
      const payload = {
        user: {
          name: data.userName,
        },
      };
      const userProfileURL = `${url}/auth`;
      const response = await axiosClient.patch(userProfileURL, payload, config);
      localStorage.removeItem("user-info");
      localStorage.setItem("user-info", JSON.stringify(response.data.data));
      alert(
        "Change full name " + response.data.status.toString().concat("fully")
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, [props]);

  return (
    <div class="user__profile">
      <div class="user__profile__top">
        <div class="user__profile__top-container">
          <div class="user__profile__top-container-wrap">
            <div class="profile__logo__container">
              <img src={ProfileLogo} alt="" id="user__profile__logo" />
            </div>

            <div class="profile__info__container">
              <div class="profile__info__container-wrap">
                <div class="user__profile__name">
                  <h4 class="profile__name-content">
                    {JSON.parse(props.user.userInfo).name == null
                      ? "Chưa có tên"
                      : JSON.parse(props.user.userInfo).name}
                  </h4>
                </div>

                <div class="profile__joined__time">
                  <h4 class="profile__joined__time-content">
                    {JSON.parse(props.user.userInfo).email}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="user__profile__editor">
        <div class="user__profile__editor-container">
          <form onSubmit={handleSubmit(handleSubmitUserName)}>
            <div class="email">
              <div class="email__title">Email:</div>
              <input
                type="text"
                id="change__email"
                value={JSON.parse(props.user.userInfo).email}
                disabled="disabled"
                class="profile__editor"
              />
            </div>
            <div class="firstname">
              <div class="firstname__title">Full name:</div>
              <input
                type="text"
                id="change__firstname"
                placeholder={
                  JSON.parse(props.user.userInfo).name == null
                    ? "Chưa có tên"
                    : JSON.parse(props.user.userInfo).name
                }
                name="userName"
                {...register("userName", {
                  required: true,
                })}
                class="profile__editor"
              />
            </div>
            {errors?.userName?.type === "required" && (
              <span className="form__error">This field is required</span>
            )}
            <div class="password">
              <div class="password__title">Password:</div>
              <Link to="/change-password">Click here to change password</Link>
            </div>
            <div class="submit__btn">
              <button type="submit">SAVE</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(UserProfile);
