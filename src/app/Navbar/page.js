// Importing the necessary modules and hooks
"use client";
import Image from "next/image";

import { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css"; // Importing CSS file from styles folder
import downarrow from "../../asserts/arrowdown.png";

import arrowdown from "../../asserts/arrowdown.png";
import leftarrow from "../../asserts/arrowleft.png";
import Correct from "../../asserts/Correct.png";

// Define your component
const Navbar = ({ toggleSidebar }) => {
  // Initialize state variables
  const [products, setProducts] = useState([]);
  const [selectedOption, setSelectedOption] = useState("RECOMMENDED");
  const [showOptions, setShowOptions] = useState(false);
  const [tooglenavbar, setTogglenavbar] = useState("false");

  const options = [
    "RECOMMENDED",
    "NEWEAST FIRST",
    "POPULAR",
    "PRICE:HIGH TO LOW",
    "PRICE:LOW TO HIGH",
  ];

  // Fetch products using useEffect hook
  useEffect(() => {
    fetchProducts();
  }, []);

  // Function to fetch products

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        console.error("Failed to fetch products");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Function to handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  // Function to toggle display of options
  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div
      style={{ backgroundColor: "white", maxWidth: "1400px", margin: "0 auto" }}
    >
      {/* Desktop */}
      <div className={`${styles.productcontainer} ${styles.desktop}`}>
        <div className={styles.productdescription}>
          <p>DISCOVER OUR PRODUCTS</p>
          <span>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </span>
        </div>
        <div className={styles.productheader}>
          <div className={styles.producttitle}>
            <h3> {products.length} ITEMS</h3>
            <h3
              styles={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                color: "rgba(136, 135, 146, 1)",
                textDecoration: toggleSidebar ? "underline" : "none",
              }}
              className={toggleSidebar ? "active" : ""}
              onClick={toggleSidebar}
            >
              <Image src={leftarrow} alt="check" />
              HIDE FILTER{" "}
            </h3>
          </div>
          <div
            className={styles.productdropdown}
            styles={{ position: "relative" }}
          >
            <h3 onClick={toggleOptions} styles={{ cursor: "pointer" }}>
              {selectedOption} <Image src={downarrow} alt="downarrow" />
            </h3>

            {/* Render the select dropdown */}
            {showOptions && (
              <ul styles={{}} className={styles.dropdownMenuul}>
                {options.map((option, index) => (
                  <li
                    styles={{
                      color: option === selectedOption ? "black" : "gray",
                    }}
                    className={styles.dropdownMenuli}
                    key={index}
                    onClick={() => handleOptionSelect(option)}
                  >
                    {option === selectedOption ? (
                      <Image src={Correct} alt="correct" />
                    ) : (
                      ""
                    )}
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      {/* Laptop */}
      <div className={`${styles.productcontainer} ${styles.laptop}`}>
        <div className={styles.productdescription}>
          <p>DISCOVER OUR PRODUCTS</p>
          <span>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </span>
        </div>
        <div className={styles.productheader}>
          <div className={styles.producttitle}>
            <h3> {products.length} ITEMS</h3>
            <h3
              styles={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                color: "rgba(136, 135, 146, 1)",
                textDecoration: toggleSidebar ? "underline" : "none",
              }}
              className={toggleSidebar ? "active" : ""}
              onClick={toggleSidebar}
            >
              <Image src={leftarrow} alt="check" />
              HIDE FILTER{" "}
            </h3>
          </div>
          <div
            className={styles.productdropdown}
            styles={{ position: "relative" }}
          >
            <h3 onClick={toggleOptions} styles={{ cursor: "pointer" }}>
              {selectedOption} <Image src={downarrow} alt="downarrow" />
            </h3>

            {/* Render the select dropdown */}
            {showOptions && (
              <ul styles={{}} className={styles.dropdownMenuul}>
                {options.map((option, index) => (
                  <li
                    styles={{
                      color: option === selectedOption ? "black" : "gray",
                    }}
                    className={styles.dropdownMenuli}
                    key={index}
                    onClick={() => handleOptionSelect(option)}
                  >
                    {option === selectedOption ? (
                      <Image src={Correct} alt="correct" />
                    ) : (
                      ""
                    )}
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>{" "}
      </div>
      {/* Tablet */}
      <div className={`${styles.productcontainer} ${styles.tablet}`}>
        <div className={styles.productdescription}>
          <p>DISCOVER OUR PRODUCTS</p>
          <span>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </span>
        </div>
        <div className={styles.productheader}>
          <div className={styles.producttitle}>
            <h3> {products.length} ITEMS</h3>
            <h3
              styles={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                color: "rgba(136, 135, 146, 1)",
                textDecoration: toggleSidebar ? "underline" : "none",
              }}
              className={toggleSidebar ? "active" : ""}
              onClick={toggleSidebar}
            >
              <Image src={leftarrow} alt="check" />
              HIDE FILTER{" "}
            </h3>
          </div>
          <div
            className={styles.productdropdown}
            styles={{ position: "relative" }}
          >
            <h3 onClick={toggleOptions} styles={{ cursor: "pointer" }}>
              {selectedOption} <Image src={downarrow} alt="downarrow" />
            </h3>

            {/* Render the select dropdown */}
            {showOptions && (
              <ul styles={{}} className={styles.dropdownMenuul}>
                {options.map((option, index) => (
                  <li
                    styles={{
                      color: option === selectedOption ? "black" : "gray",
                    }}
                    className={styles.dropdownMenuli}
                    key={index}
                    onClick={() => handleOptionSelect(option)}
                  >
                    {option === selectedOption ? (
                      <Image src={Correct} alt="correct" />
                    ) : (
                      ""
                    )}
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>{" "}
      </div>
      {/* Mobile */}
      <div className={`${styles.productcontainer} ${styles.mobile}`}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            color: "black",
            marginTop: "120px",
          }}
        >
          <p
            style={{
              color: "rgba(136, 135, 146, 1)",
              fontWeight: "bold",
            }}
          >
            HOME
          </p>
          <p
            style={{
              borderLeft: "1px solid  rgba(136, 135, 146, 1)",
              fontWeight: "bold",
            }}
          >
            SHOP
          </p>
        </div>
        <div className={styles.productdescription}>
          <p>DISCOVER OUR PRODUCTS</p>
          <span>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </span>
        </div>
        <div className={styles.productheader}>
          <div className={styles.producttitle}>
            <h5
              styles={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                color: "rgba(136, 135, 146, 1)",

                textDecoration: toggleSidebar ? "underline" : "none",
              }}
              className={toggleSidebar ? "active" : ""}
              onClick={toggleSidebar}
            >
              FILTER{" "}
            </h5>
          </div>
          <div
            className={styles.productdropdown}
            styles={{ position: "relative" }}
          >
            <h5 onClick={toggleOptions} styles={{ cursor: "pointer" }}>
              {selectedOption} <Image src={downarrow} alt="downarrow" />
            </h5>

            {showOptions && (
              <ul styles={{}} className={styles.dropdownMenuul}>
                {options.map((option, index) => (
                  <li
                    styles={{
                      color: option === selectedOption ? "black" : "gray",
                    }}
                    className={styles.dropdownMenuli}
                    key={index}
                    onClick={() => handleOptionSelect(option)}
                  >
                    {option === selectedOption ? (
                      <Image src={Correct} alt="correct" />
                    ) : (
                      ""
                    )}
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
