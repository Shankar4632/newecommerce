"use client";

import React, { useState } from "react";
// import React from "react";
import Head from "next/head";
import Headerpage from "./Header/page";
import Navbar from "./Navbar/page";
import Demopage from "./Demo.js/page";

import Products from "./Productlist/page";
import Slidebar from "./Siderbar/page";
import "./styles/globals.css";

const page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta
          name="Appscrip.demo"
          content="This is the home page of your website"
        />
      </Head>
      <Headerpage />
      <Navbar toggleSidebar={toggleSidebar} />
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {isSidebarOpen && <Slidebar />}
        <Products />
      </div>
      <Demopage />
    </div>
  );
};

export default page;
