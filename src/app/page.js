import React from "react";
import Footerpage from "./Footer/page";
import Headerpage from "./Header/page";
import Navbar from "./Navbar/page";
import Demopage from "./Demo.js/page";
import styles from "../app/styles/Demo.module.css";
import Products from "./Productlist/page";
import "./styles/globals.css";
const page = () => {
  return (
    <div>
      {/* <Headerpage /> */}
      {/* <Navbar /> */}

      <Products />
      <Demopage />
      {/* <Footerpage /> */}
    </div>
  );
};

export default page;
