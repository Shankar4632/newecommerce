"use client";
import Image from "next/image";

import React, { useState } from "react";
import styles from "../styles/Slidebar.module.css";
import downarrow from "../../asserts/arrowdown.png";

const Sidebar = () => {
  const [toggledowns, setToggledowns] = useState({});

  const toggleDown = (section) => {
    setToggledowns((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const renderList = (section) => {
    return toggledowns[section] ? (
      <ul className="toggledown">
        <li>
          <span
            style={{
              cursor: "pointer",
              color: " rgba(191, 200, 205, ",
              textDecoration: "underline",
            }}
          >
            Unselect all
          </span>
        </li>
        <li>
          <input type="checkbox" id={`${section}-checkbox-1`} />
          <label htmlFor={`${section}-checkbox-1`}>Men</label>
        </li>
        <li>
          <input type="checkbox" id={`${section}-checkbox-2`} />
          <label htmlFor={`${section}-checkbox-2`}>Women</label>
        </li>
        <li>
          <input type="checkbox" id={`${section}-checkbox-3`} />
          <label htmlFor={`${section}-checkbox-3`}>Baby & Kids</label>
        </li>
      </ul>
    ) : null;
  };

  return (
    <section className={styles.sidebar}>
      <main className={styles.sidebarmain}>
        <div className={styles.sidebarcolumn}>
          <ul>
            <li>
              <h4>
                <input type="checkbox" style={{ cursor: "pointer" }} />
                CUSTOMIZABLE
              </h4>
            </li>
            <li>
              <div>
                <h4>IDEAL FOR</h4>
                <Image
                  src={downarrow}
                  alt="downarrow"
                  onClick={() => toggleDown("idealFor")}
                />
              </div>
              <span>ALL</span>
              {renderList("idealFor")}
            </li>
            <li>
              <div>
                <h4>OCCASION</h4>
                <Image
                  src={downarrow}
                  alt="downarrow"
                  onClick={() => toggleDown("brands")}
                />
              </div>
              <span>ALL</span>
              {renderList("brands")}
            </li>
            <li>
              <div>
                <h4>WORK</h4>
                <Image
                  src={downarrow}
                  alt="downarrow"
                  onClick={() => toggleDown("priceRange")}
                />
              </div>
              <span>ALL</span>
              {renderList("priceRange")}
            </li>
            <li>
              <div>
                <h4>FABRIC</h4>
                <Image
                  src={downarrow}
                  alt="downarrow"
                  onClick={() => toggleDown("fabric")}
                />
              </div>
              <span>ALL</span>
              {renderList("fabric")}
            </li>
            <li>
              <div>
                <h4>SEGMENT</h4>
                <Image
                  src={downarrow}
                  alt="downarrow"
                  onClick={() => toggleDown("segment")}
                />
              </div>
              <span>ALL</span>
              {renderList("segment")}
            </li>
            <li>
              <div>
                <h4>SUITABLE FOR</h4>
                <Image
                  src={downarrow}
                  alt="downarrow"
                  onClick={() => toggleDown("suitableFor")}
                />
              </div>
              <span>ALL</span>
              {renderList("suitableFor")}
            </li>
            <li>
              <div>
                <h4>RAW MATERIAL</h4>
                <Image
                  src={downarrow}
                  alt="downarrow"
                  onClick={() => toggleDown("rawMaterial")}
                />
              </div>
              <span>ALL</span>
              {renderList("rawMaterial")}
            </li>
            <li>
              <div>
                <h4>PATTERN</h4>
                <Image
                  src={downarrow}
                  alt="downarrow"
                  onClick={() => toggleDown("pattern")}
                />
              </div>
              <span>ALL</span>
              {renderList("pattern")}
            </li>
          </ul>
        </div>
      </main>
    </section>
  );
};

export default Sidebar;
