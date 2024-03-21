"use client";
import Image from "next/image";

import React, { useEffect, useState } from "react";
//css
//images
import leftarrow from "../../asserts/arrowleft.png";
import downarrow from "../../asserts/arrowdown.png";
import heart from "../../asserts/Vector.png";
import Correct from "../../asserts/Correct.png";
// import Sidebar from "../../Sidebar";
import styles from "../styles/Product.module.css";
const Product = () => {
  //hooks or state
  const [products, setProducts] = useState([]);
  const [selectedOption, setSelectedOption] = useState("RECOMMENDED");
  const [showOptions, setShowOptions] = useState(false);
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [tooglenavbar, setTogglenavbar] = useState("false");

  //function calling
  const options = [
    "RECOMMENDED",
    "NEWEAST FIRST",
    "POPULAR",
    "PRICE:HIGH TO LOW",
    "PRICE:LOW TO HIGH",
  ];
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };
  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  console.log(products);

  function togglenavbar() {
    setTogglenavbar(!tooglenavbar);
  }
  //title more than 20 words
  function truncateContent(content, maxLength) {
    if (!content) return "";
    if (content.split(" ").length <= maxLength) return content;

    const words = content.split(" ").slice(0, maxLength);
    const truncatedContent = words.join(" ") + "...";
    return truncatedContent;
  }
  //return statement
  return (
    <section>
      {/* Desktop */}
      <div className={`${styles.productcontainer} ${styles.desktop}`}>
        <main>
          <div className={styles.productdescription}>
            <p>DISCOVER OUR PRODUCTS</p>
            <span>
              Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
              scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
              dolor.
            </span>
          </div>
          <div
            style={{ border: "1px solid red" }}
            className={styles.productheader}
          >
            <div className={styles.producttitle}>
              <h3> {products.length} ITEMS</h3>
              <h3
                styles={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  color: "rgba(136, 135, 146, 1)",
                  textDecoration: tooglenavbar ? "underline" : "none",
                }}
                className={tooglenavbar ? "active" : ""}
                onClick={togglenavbar}
              >
                <Image src={leftarrow} alt="leftarrow" />
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
                <ul className={styles.dropdownMenu}>
                  {options.map((option, index) => (
                    <li
                      styles={{
                        cursor: "pointer",
                        liststyles: "none",
                        padding: "10px",
                        borderBottom: "1px solid black",
                        textAlign: "center",
                        color: option === selectedOption ? "black" : "gray",
                      }}
                      key={index}
                      onClick={() => handleOptionSelect(option)}
                    >
                      {option === selectedOption ? (
                        <Image src={Correct} alt="check" />
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
          {/* {tooglenavbar ? <Sidebar className="sidebar" /> : ""} */}
          {/* <Sidebar className="sidebar" /> */}
          <div className={styles.productgrid}>
            {products.map((product) => (
              <div
                className={styles.productitem}
                key={product.id}
                onMouseEnter={() => setHoveredProductId(product.id)}
                onMouseLeave={() => setHoveredProductId(null)}
              >
                <Image
                  src={product.image}
                  alt="productsImage"
                  width={200}
                  height={200}
                  className={`product-image product-image-${product.id}`}
                />
                <h4
                  className={styles.producttitle}
                  dangerouslySetInnerHTML={{
                    __html: truncateContent(product.title.slice(0, 20)),
                  }}
                ></h4>
                <span className={styles.productcategory}>
                  ${product.category}
                </span>
                {hoveredProductId === product.id && (
                  <h4 className="outofstockmessage">Out of stock</h4>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
      {/* Laptop */}
      <div className={`${styles.productcontainer} ${styles.laptop}`}>
        <main className={styles.productmain}>
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
                  textDecoration: tooglenavbar ? "underline" : "none",
                }}
                className={tooglenavbar ? "active" : ""}
                onClick={togglenavbar}
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
          {/* {tooglenavbar ? <Sidebar className="sidebar" /> : ""} */}
          {/* <Sidebar className="sidebar" /> */}
          <div className={styles.productgrid}>
            {products.map((product) => (
              <div
                className={styles.productitem}
                key={product.id}
                onMouseEnter={() => setHoveredProductId(product.id)}
                onMouseLeave={() => setHoveredProductId(null)}
              >
                <img
                  src={product.image}
                  alt="productsImage"
                  className={`product-image product-image-${product.id}`}
                />
                <h4
                  className={styles.producttitle}
                  dangerouslySetInnerHTML={{
                    __html: truncateContent(product.title.slice(0, 20)),
                  }}
                ></h4>
                <span className={styles.productcategory}>
                  ${product.category}{" "}
                  <Image
                    src={heart}
                    alt="favroite"
                    style={{
                      cursor: "pointer",
                      width: "15px",
                      height: "15px",

                      objectFit: "fill",
                    }}
                    className={styles.favoriteIcon}
                  />
                </span>
                {hoveredProductId === product.id && (
                  <h4 className="outofstockmessage">Out of stock</h4>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
      {/* Tablet */}
      <div className={`${styles.container} ${styles.tablet}`}></div>
      {/* Mobile */}
      <div className={`${styles.container} ${styles.mobile}`}></div>
    </section>
  );
};

export default Product;
