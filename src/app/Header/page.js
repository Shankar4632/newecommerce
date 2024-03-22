"use client";

import Image from "next/image";
import styles from "../styles/Header.module.css"; // Importing CSS file from styles folder

// images
import bar from "../../asserts/bar.png";
import image1 from "../../asserts/element.png";
import image2 from "../../asserts/searchnormal.png";
import image3 from "../../asserts/Vector.png";
import image4 from "../../asserts/shoppingbag.png";
import image5 from "../../asserts/profile.png";
import image6 from "../../asserts/arrowdown.png";
import image7 from "../../asserts/Logo.png";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("toggleMenu");
  };
  return (
    <section
      style={{ backgroundColor: "white", width: "100%", margin: "0 auto" }}
    >
      {/* Mobile */}
      <div className={`${styles.container} ${styles.mobile}`}>
        <header className={styles.headerSection}>
          <div className={styles.headerTopMain}>
            <div className={styles.headerTop}>
              <div className={styles.headerLogo}>
                {" "}
                <Image src={image1} alt="image1" />
                Lorem ipsum dolor
              </div>
            </div>
          </div>
          <div className={styles.headerMiddle}>
            <div className={styles.headerLeft}>
              <Image
                src={bar}
                alt="image2"
                style={{ width: "22px", height: "22px" }}
                onClick={toggleMenu}
              />

              <Image
                src={image7}
                alt="image2"
                style={{ width: "22px", height: "22px" }}
              />
            </div>
            <div className={styles.headerCenter}>
              <h1>LOGO</h1>
            </div>
            <div className={styles.headerRight}>
              <span className={styles.headerIcons}>
                <Image
                  src={image2}
                  alt="Search"
                  style={{ width: "20px", height: "20px" }}
                />
                <Image
                  src={image3}
                  alt="Favourite"
                  style={{ width: "20px", height: "20px" }}
                />
                <Image
                  src={image4}
                  alt="Bag"
                  style={{ width: "20px", height: "20px" }}
                />
              </span>
            </div>
          </div>
          <div className={styles.menuContainer}>
            {isOpen && (
              <div className={styles.menu}>
                <ul className={styles.menuList}>
                  <li
                    style={{
                      textAlign: "center",
                      color: "black",
                      padding: "20px",
                    }}
                  >
                    SHOP
                  </li>
                  <li
                    style={{
                      textAlign: "center",
                      color: "black",
                      padding: "20px",
                    }}
                  >
                    SKILLS
                  </li>
                  <li
                    style={{
                      textAlign: "center",
                      color: "black",
                      padding: "20px",
                    }}
                  >
                    STORIES
                  </li>
                  <li
                    style={{
                      textAlign: "center",
                      color: "black",
                      padding: "20px",
                    }}
                  >
                    ABOUT
                  </li>
                  <li
                    style={{
                      textAlign: "center",
                      color: "black",
                      padding: "20px",
                    }}
                  >
                    CONTACT US
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
      </div>
      {/* Tablet */}
      <div className={`${styles.container} ${styles.tablet}`}>
        <header className={styles.headerSection}>
          <div className={styles.headerTopMain}>
            <div className={styles.headerTop}>
              <div className={styles.headerLogo}>
                {" "}
                <Image src={image1} alt="image1" />
                Lorem ipsum dolor
              </div>
              <div className={styles.headerLogo}>
                {" "}
                <Image src={image1} alt="image1" />
                Lorem ipsum dolor
              </div>
              <div className={styles.headerLogo}>
                {" "}
                <Image src={image1} alt="image1" />
                Lorem ipsum dolor
              </div>
            </div>
          </div>
          <div className={styles.headerMiddle}>
            <div className={styles.headerLeft}>
              <Image src={image7} alt="image2" />
            </div>
            <div className={styles.headerCenter}>
              <h1>LOGO</h1>
            </div>
            <div className={styles.headerRight}>
              <span className={styles.headerIcons}>
                <Image src={image2} alt="image2" />
                <Image src={image3} alt="image3" />
                <Image src={image4} alt="image4" />
                <Image src={image5} alt="image5" />
              </span>
              <p style={{ display: "flex", alignItems: "center" }}>
                ENG <Image src={image6} alt="image6" />
              </p>
            </div>
          </div>
          <div className={styles.headerBottom}>
            <ul>
              <li>SHOP</li>
              <li>SKILLS</li>
              <li>STORIES</li>
              <li>ABOUT</li>
              <li>CONTACT US</li>
            </ul>
          </div>
        </header>
      </div>
      {/* Desktop */}
      <div className={`${styles.container} ${styles.desktop}`}>
        <header className={styles.headerSection}>
          <div className={styles.headerTopMain}>
            <div className={styles.headerTop}>
              <div className={styles.headerLogo}>
                {" "}
                <Image src={image1} alt="image1" />
                Lorem ipsum dolor
              </div>
              <div className={styles.headerLogo}>
                {" "}
                <Image src={image1} alt="image1" />
                Lorem ipsum dolor
              </div>
              <div className={styles.headerLogo}>
                {" "}
                <Image src={image1} alt="image1" />
                Lorem ipsum dolor
              </div>
            </div>
          </div>
          <div className={styles.headerMiddle}>
            <div className={styles.headerLeft}>
              <Image src={image7} alt="image2" />
            </div>
            <div className={styles.headerCenter}>
              <h1>LOGO</h1>
            </div>
            <div className={styles.headerRight}>
              <span className={styles.headerIcons}>
                <Image src={image2} alt="image2" />
                <Image src={image3} alt="image3" />
                <Image src={image4} alt="image4" />
                <Image src={image5} alt="image5" />
              </span>
              <p>
                ENG <Image src={image6} alt="image6" />
              </p>
            </div>
          </div>
          <div className={styles.headerBottom}>
            <ul>
              <li>SHOP</li>
              <li>SKILLS</li>
              <li>STORIES</li>
              <li>ABOUT</li>
              <li>CONTACT US</li>
            </ul>
          </div>
        </header>
      </div>
      {/* Laptop */}
      <div className={`${styles.container} ${styles.laptop}`}>
        <header className={styles.headerSection}>
          <div className={styles.headerTopMain}>
            <div className={styles.headerTop}>
              <div className={styles.headerLogo}>
                {" "}
                <Image src={image1} alt="image1" />
                Lorem ipsum dolor
              </div>
              <div className={styles.headerLogo}>
                {" "}
                <Image src={image1} alt="image1" />
                Lorem ipsum dolor
              </div>
              <div className={styles.headerLogo}>
                {" "}
                <Image src={image1} alt="image1" />
                Lorem ipsum dolor
              </div>
            </div>
          </div>
          <div className={styles.headerMiddle}>
            <div className={styles.headerLeft}>
              <Image src={image7} alt="image2" />
            </div>
            <div className={styles.headerCenter}>
              <h1>LOGO</h1>
            </div>
            <div className={styles.headerRight}>
              <span className={styles.headerIcons}>
                <Image src={image2} alt="image2" />
                <Image src={image3} alt="image3" />
                <Image src={image4} alt="image4" />
                <Image src={image5} alt="image5" />
              </span>
              <p>
                ENG <Image src={image6} alt="image6" />
              </p>
            </div>
          </div>
          <div className={styles.headerBottom}>
            <ul>
              <li>SHOP</li>
              <li>SKILLS</li>
              <li>STORIES</li>
              <li>ABOUT</li>
              <li>CONTACT US</li>
            </ul>
          </div>
        </header>
      </div>
    </section>
  );
};

export default Header;
