import React, { useEffect } from "react";
import "./UserProfile.css";
import ProfileLogo from "../../assets/profile-logo.png";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function UserProfile(props) {
  useEffect(() => {
    console.log(props);
  }, []);

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
                  <h4 class="profile__name-content">NGUYEN HUU MINH DUC</h4>
                </div>

                <div class="profile__joined__time">
                  <h4 class="profile__joined__time-content">
                    Joined sinced 2nd July, 2022
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="user__profile__editor">
        <div class="user__profile__editor-container">
          <form action="">
            <div class="email">
              <div class="email__title">Email:</div>
              <input
                type="text"
                id="change__email"
                value="a@gmail.com"
                disabled="disabled"
                class="profile__editor"
              />
            </div>
            <div class="firstname">
              <div class="firstname__title">Full name:</div>
              <input
                type="text"
                id="change__firstname"
                value="Minh Duc"
                class="profile__editor"
              />
            </div>
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
