import React from "react";
import { SignUpForm } from "../../components";
import Layout from "../Layout/Layout";
import "./SignUp.css";

const SignUp = () => {
  return (
    <Layout renderHeaderAndFooter={false}>
      <div className="app__signup">
        <SignUpForm />
      </div>
    </Layout>
  );
};

export default SignUp;
