// Importing the necessary modules and hooks
"use client";
import { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css"; // Importing CSS file from styles folder

import arrowdown from "../../asserts/arrowdown.png";
import leftarrow from "../../asserts/arrowleft.png";

// Define your component
const Navbar = () => {
  // Initialize state variables
  const [products, setProducts] = useState([]);
  const [selectedOption, setSelectedOption] = useState("RECOMMENDED");
  const [showOptions, setShowOptions] = useState(false);
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
    <div>
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
          <h4>{products.length} items</h4>
          <p style={{ display: "flex", alignItems: "center" }}>
            <img src={leftarrow} alt="leftarrow" />
            HIDE FILTER
          </p>
        </div>
        <div
          className={styles.productdropdown}
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <p onClick={toggleOptions} style={{ cursor: "pointer" }}>
            {selectedOption}
            <img src={arrowdown} alt="arrowdown" />
          </p>

          {/* Render the select dropdown */}
          {showOptions && (
            <ul
              style={{
                position: "absolute",
                top: 35,
                right: 0,
                zIndex: 1,
                backgroundColor: "white",
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              }}
            >
              {options.map((option, index) => (
                <li
                  style={{
                    cursor: "pointer",
                    listStyle: "none",
                    padding: "10px",
                    borderBottom: "1px solid black",
                    textAlign: "center",
                    color: option === selectedOption ? "black" : "gray",
                  }}
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option === selectedOption && (
                    <img src={leftarrow} alt="leftarrow" />
                  )}
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
