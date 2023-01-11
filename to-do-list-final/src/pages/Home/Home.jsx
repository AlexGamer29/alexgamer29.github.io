import React from "react";
import { HomeHeader } from "../../components";
import Layout from "../Layout/Layout";

import "./Home.css";

const Home = () => {
  return (
    <Layout renderHeaderAndFooter={true}>
      <div className="app__homepage">
        <HomeHeader />
      </div>
    </Layout>
  );
};

export default Home;
