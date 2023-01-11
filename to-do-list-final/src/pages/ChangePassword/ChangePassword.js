import React from "react";
import "./ChangePassword.css";

function ChangePassword() {
  return (
    <div class="app__forgot__password">
      <div id="login__form__container">
        <div id="form__container">
          <div id="form__container__wrap">
            <form onSubmit="{handleSubmit(onSubmit)}">
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
                          id="form__password-input"
                          class="form__input"
                          placeholder="Enter new password"
                          type="password"
                          name="password"
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
                          id="form__password-input"
                          class="form__input"
                          placeholder="Re-enter new password"
                          type="password"
                          name="password"
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
