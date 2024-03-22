"use client";
import Image from "next/image";

import React, { useEffect, useState } from "react";
//css
//images
import leftarrow from "../../asserts/arrowleft.png";
import downarrow from "../../asserts/arrowdown.png";
import heart from "../../asserts/Vector.png";
import Correct from "../../asserts/Correct.png";
import Sidebar from "../Siderbar/Page";
import styles from "../styles/Product.module.css";
const Product = () => {
  //hooks or state
  const [products, setProducts] = useState([]);
  const [selectedOption, setSelectedOption] = useState("RECOMMENDED");
  const [showOptions, setShowOptions] = useState(false);
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [tooglenavbar, setTogglenavbar] = useState("false");
  const { IsLoading, setIsLoading } = useState(true);

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
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data)

  //     );
  //   setIsLoading(false);
  // }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  // console.log(products);

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
    <section style={{ backgroundColor: "white", width: "90%" }}>
      {IsLoading ? (
        <div className={styles.loadingcontainer}>
          <div className={styles.contentwrapper}>
            <div className={styles.leftcontent}>
              <p style={{ color: "red" }}>Loading...</p>
            </div>
            <div className={styles.rightcontent}>
              <p style={{ color: "red" }}>Loading...</p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* Desktop */}
          <div className={`${styles.productcontainer} ${styles.desktop}`}>
            <main>
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
              {/* {tooglenavbar ? <Sidebar className="sidebar" /> : ""} */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
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
              </div>
            </main>
          </div>
          {/* Tablet */}
          <div className={`${styles.productcontainer} ${styles.tablet}`}>
            <main className={styles.productmain}>
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
          {/* Mobile */}
          <div className={`${styles.productcontainer} ${styles.mobile}`}>
            <main className={styles.productmain}>
              {/* <div className={styles.productdescription}>
                <p>DISCOVER OUR PRODUCTS</p>
                <span>
                  Lorem ipsum dolor sit amet consectetur. Amet est posuere
                  rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut
                  elementum dolor.
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

                      textDecoration: tooglenavbar ? "underline" : "none",
                    }}
                    className={tooglenavbar ? "active" : ""}
                    onClick={togglenavbar}
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
              </div> */}

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
        </div>
      )}
      ;
    </section>
  );
};

export default Product;
