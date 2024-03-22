"use client";

import React, { useState } from "react";
// import React from "react";
import Footerpage from "./Footer/page";
import Headerpage from "./Header/page";
import Navbar from "./Navbar/page";
import Demopage from "./Demo.js/page";
import styles from "../app/styles/Demo.module.css";
import Products from "./Productlist/page";
import Slidebar from "./Siderbar/Page";
import "./styles/globals.css";
const page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      <Headerpage />
      <Navbar toggleSidebar={toggleSidebar} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {isSidebarOpen && <Slidebar />}
        <Products />
      </div>
      <Demopage />
      {/* <Footerpage /> */}
    </div>
  );
};

export default page;
