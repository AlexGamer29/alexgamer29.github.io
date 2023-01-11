import React from "react";
import { NavBar } from "../../components";

const Layout = ({ renderHeaderAndFooter, children }) => (
  <div>
    {renderHeaderAndFooter && <NavBar />}
    {children}
  </div>
);

export default Layout;
