import React from "react";
import Footerpage from "./Footer/page";
import Headerpage from "./Header/page";
import Navbar from "./Navbar/page";
import Demopage from "./Demo.js/page";
import styles from "../app/styles/Demo.module.css";
import Products from "./Productlist/page";
import Slidebar from "./Siderbar/Page";
import "./styles/globals.css";
const page = () => {
  return (
    <div>
      <Navbar />
      {/* <Headerpage /> */}
      <div>
        {/* <Slidebar /> */}
        {/* <Products /> */}
      </div>
      {/* <Demopage /> */}
      {/* <Footerpage /> */}
    </div>
  );
};

export default page;
