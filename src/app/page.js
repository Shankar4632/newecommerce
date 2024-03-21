import React from "react";
import Footerpage from "./Footer/page";
import Headerpage from "./Header/page";
import Navbar from "./Navbar/page";
import Demopage from "./Demo/page";
import styles from "../app/styles/Demo.module.css";
import "./styles/globals.css";
const page = () => {
  return (
    <div>
      {/* <Footerpage /> */}
      {/* <Headerpage /> */}
      {/* <Navbar /> */}

      <Demopage />
    </div>
  );
};

export default page;
