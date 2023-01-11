import React from "react";
import "./HomeHeader.css";
import { images } from "../../../constants/index";

const HomeHeader = () => {
  return (
    <div className="home__header">
      <div className="app__header-info">
        <div className="header__title">
          <div className="header__title-primary">
            <p>
              Utilize to do list to plan your life and oversee the work of your
              team
            </p>
          </div>
          <div className="header__title-secondary">
            <p>
              People organize their tasks, lists and manage their team’s
              projects with todoList
            </p>
          </div>
        </div>
        <div className="app__header-img">
          <img src={images.headerImage} alt=""></img>
        </div>
        <div className="app__header-customer">
          <h1 className="customer__title-primary">Join with our 1,000+ customers around the globe</h1>
          <div className="customer-list">
            <i class="fa-brands fa-google" />
            <i class="fa-brands fa-facebook" />
            <i class="fa-brands fa-youtube" />
            <i class="fa-brands fa-linkedin-in" />
            <i class="fa-brands fa-github" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
