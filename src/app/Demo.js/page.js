"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import styles from "../styles/Demo.module.css";
//images
import USA from "../../asserts/Group.png";
import instagram from "../../asserts/svg.png";
import Linkdin from "../../asserts/mdi_linkedin.png";
import googlpay from "../../asserts/Googlepay.png";
import mastercard from "../../asserts/Mastercard.png";
import paypal from "../../asserts/Paypal.png";
import amex from "../../asserts/Group 136193.png";
import Iphonepay from "../../asserts/Iphone.png";
import QPAY from "../../asserts/Qpay.png";
import downarrow from "../../asserts/arrowdown.png";
const page = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(true); // Ensure the dropdown menu is initially open on the client side
  }, []); // Run this effect only once when the component mounts

  const Dropdown = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className={styles.toggleDropdown}>
        <div>
          <h4
            onClick={toggleDropdown}
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color: "white",
            }}
          >
            {title}
            <Image
              src={downarrow}
              alt="downarrow"
              style={{ color: "white", backgroundColor: "white" }}
            />
          </h4>
          {isOpen && (
            <ul
              style={{
                listStyle: "none",
                padding: "0px",
              }}
            >
              {items.map((item, index) => (
                <li key={index} style={{ padding: "5px" }}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };

  return (
    <section
      style={{ backgroundColor: "white", maxWidth: "1400px", margin: "0 auto" }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Mobile */}
        <div className={`${styles.container} ${styles.mobile}`}>
          <main className={styles.footermain}>
            <div className={styles.footercolumn}>
              <div className={styles.footercolumnfirst}>
                <h4>Be the first to know</h4>
                <div>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. this is simply dummy text.
                </div>
                <div className={styles.footerinput}>
                  <input
                    type="text"
                    placeholder="Enter your e-mail..."
                    alt="email"
                  />
                  <button
                    className={styles.footerinputbutton}
                    type="button"
                    style={{ cursor: "pointer" }}
                  >
                    SUBSCRIBE
                  </button>
                </div>
              </div>
              <hr className={styles.hr} />

              <div className={styles.footercolumnsecond}>
                <div>
                  <h4>Call US</h4>
                  <ul>
                    <li>+44 221 133 5360</li>
                    <li>customercare@mettamuse.com</li>
                  </ul>
                </div>
                <hr className={styles.hr} />

                <div className={styles.footercolumnsecond2}>
                  <h4>CURRENCY</h4>
                  <ul className="">
                    <li
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        justifyContent: "center",
                      }}
                    >
                      <Image src={USA} alt="USA flag" />. USD
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr style={{ border: "1px solid rgba(255, 255, 255, 0.5)" }} />
            <div className={styles.toggleDropdown}>
              <Dropdown
                title="mettä muse"
                items={[
                  "About Us",
                  "Stories",
                  "Artisans",
                  "Boutiques",
                  "Contact Us",
                  "EU Compliances Docs",
                ]}
              />
              <Dropdown
                title="QUICK LINKS"
                items={[
                  "Join/Login as a Seller",
                  "Payment & Pricing",
                  "Return & Refunds",
                  "FAQs",
                  "Privacy Policy",
                  "Terms & Conditions",
                ]}
              />
              <div style={{ paddingBottom: "10px" }}>
                <Dropdown title="FOLLOW US" items={["Instagram", "LinkedIn"]} />
              </div>
            </div>

            <h4 style={{ color: "white" }}>mettä muse ACCEPTS</h4>

            <div className={styles.footerpay}>
              <Image src={googlpay} alt="googlpay" />
              <Image src={mastercard} alt="mastercard" />
              <Image src={paypal} alt="paypal" />
              <Image src={amex} alt="amex" />
              <Image src={Iphonepay} alt="Iphonepay" />
              <Image src={QPAY} alt="QPAY" />
            </div>
            <div className={styles.footercopyright} alt="copyright">
              <p>Copyright © 2023 mettamuse. All rights reserved.</p>
            </div>
          </main>
        </div>
        {/* Tablet */}
        <div className={`${styles.container} ${styles.tablet}`}>
          <main className={styles.footermain}>
            <div className={styles.footercolumn}>
              <div className={styles.footercolumnfirst}>
                <h4>Be the first to know</h4>
                <div>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. this is simply dummy text.
                </div>
                <div className={styles.footerinput}>
                  <input
                    type="text"
                    placeholder="Enter your e-mail..."
                    alt="email"
                  />
                  <button
                    className={styles.footerinputbutton}
                    type="button"
                    style={{ cursor: "pointer" }}
                  >
                    SUBSCRIBE
                  </button>
                </div>
              </div>

              <div className={styles.footercolumnsecond}>
                <div>
                  <h4 style={{ paddingTop: "40px" }}>CONTACT US</h4>
                  <ul>
                    <li>+44 221 133 5360</li>
                    <li style={{ paddingTop: "10px" }}>
                      customercare@mettamuse.com
                    </li>
                  </ul>
                </div>
                <div className={styles.footercolumnsecond2}>
                  <h4>CURRENCY</h4>
                  <ul className="">
                    <li
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        justifyContent: "center",
                      }}
                    >
                      <Image src={USA} alt="USA flag" />. USD
                    </li>
                    <li
                      style={{
                        fontSize: "10px",
                        fontWeight: "400",
                        paddingTop: "10px",
                      }}
                    >
                      Transactions will be completed in Euros and a currency
                      reference is available on hover,
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr style={{ border: "1px solid rgba(255, 255, 255, 0.5)" }} />
            <div className={styles.footercolumn2}>
              <div className={styles.footercolumnfirst2}>
                <div>
                  <h4>mettä muse</h4>
                  <ul>
                    <li>About Us</li>
                    <li>Stories</li>
                    <li>Artisans</li>
                    <li>Boutiques</li>
                    <li>Contact Us</li>
                    <li>EU Compliances Docs</li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                <div>
                  <h4>QUICK LINKS</h4>
                  <ul>
                    <li>Orders & Shipping</li>
                    <li>Join/Login as a Seller</li>
                    <li>Payment & Pricing</li>
                    <li>Return & Refunds</li>
                    <li>FAQs</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                  </ul>
                </div>
              </div>
              <div className={styles.footercolumnsecond2}>
                <div
                  style={{
                    flexDirection: "row",
                    textAlign: "center",
                  }}
                >
                  <h4>FOLLOW US</h4>{" "}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={instagram}
                      alt="instagram"
                      style={{
                        borderRadius: "50%",
                        border: "1px solid white",
                        cursor: "pointer",
                      }}
                    />
                    <Image
                      src={Linkdin}
                      alt="Linkdin"
                      sizes="30"
                      style={{
                        borderRadius: "50%",
                        border: "1px solid white",
                        marginLeft: "10px",
                        padding: "5px",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                  <div>
                    <h4>mettä muse ACCEPTS</h4>
                    <div className={styles.footerpay}>
                      <Image src={googlpay} alt="googlpay" />
                      <Image src={mastercard} alt="mastercard" />
                      <Image src={paypal} alt="paypal" />
                      <Image src={amex} alt="amex" />
                      <Image src={Iphonepay} alt="Iphonepay" />
                      <Image src={QPAY} alt="QPAY" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.footercopyright} alt="copyright">
              <p>Copyright © 2023 mettamuse. All rights reserved.</p>
            </div>
          </main>
        </div>
        {/* Desktop */}
        <div className={`${styles.container} ${styles.desktop}`}>
          <main className={styles.footermain}>
            <div className={styles.footercolumn}>
              <div className={styles.footercolumnfirst}>
                <h4>Be the first to know</h4>
                <div>Sign up for updates from mettā muse.</div>
                <div className={styles.footerinput}>
                  <input
                    type="text"
                    placeholder="Enter your e-mail..."
                    alt="email"
                  />
                  <button
                    className={styles.footerinputbutton}
                    type="button"
                    style={{ cursor: "pointer" }}
                  >
                    SUBSCRIBE
                  </button>
                </div>
              </div>
              <div className={styles.footercolumnfirstr}>
                <h4>Be the first to know</h4>
                <div>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. this is simply dummy text.
                </div>
                <div className={styles.footerinput}>
                  <input
                    type="text"
                    placeholder="Enter your e-mail..."
                    alt="email"
                  />
                  <button
                    className="footerinputbutton"
                    type="button"
                    style={{ cursor: "pointer" }}
                  >
                    SUBSCRIBE
                  </button>
                </div>
                <hr className="hr" />
              </div>

              <div className={styles.footercolumnsecond}>
                <div>
                  <h4 style={{ paddingTop: "40px" }}>CONTACT US</h4>
                  <ul>
                    <li>+44 221 133 5360</li>
                    <li style={{ paddingTop: "10px" }}>
                      customercare@mettamuse.com
                    </li>
                  </ul>
                </div>
                <div className={styles.footercolumnsecond2}>
                  <h4>CURRENCY</h4>
                  <ul className="">
                    <li
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <Image src={USA} alt="USA flag" />. USD
                    </li>
                    <li
                      style={{
                        fontSize: "10px",
                        fontWeight: "400",
                        paddingTop: "10px",
                      }}
                    >
                      Transactions will be completed in Euros and a currency
                      reference is available on hover,
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr style={{ border: "1px solid rgba(255, 255, 255, 0.5)" }} />
            <div className={styles.footercolumn2}>
              <div className={styles.footercolumnfirst2}>
                <div>
                  <h4>mettä muse</h4>
                  <ul>
                    <li>About Us</li>
                    <li>Stories</li>
                    <li>Artisans</li>
                    <li>Boutiques</li>
                    <li>Contact Us</li>
                    <li>EU Compliances Docs</li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                <div>
                  <h4>QUICK LINKS</h4>
                  <ul>
                    <li>Orders & Shipping</li>
                    <li>Join/Login as a Seller</li>
                    <li>Payment & Pricing</li>
                    <li>Return & Refunds</li>
                    <li>FAQs</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                  </ul>
                </div>
              </div>
              <div className={styles.footercolumnsecond2}>
                <div>
                  <h4>FOLLOW US</h4>{" "}
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Image
                      src={instagram}
                      alt="instagram"
                      style={{
                        borderRadius: "50%",
                        border: "1px solid white",
                        cursor: "pointer",
                      }}
                    />
                    <Image
                      src={Linkdin}
                      alt="Linkdin"
                      sizes="30"
                      style={{
                        borderRadius: "50%",
                        border: "1px solid white",
                        marginLeft: "10px",
                        padding: "5px",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                  <div>
                    <h4>mettä muse ACCEPTS</h4>
                    <div className={styles.footerpay}>
                      <Image src={googlpay} alt="googlpay" />
                      <Image src={mastercard} alt="mastercard" />
                      <Image src={paypal} alt="paypal" />
                      <Image src={amex} alt="amex" />
                      <Image src={Iphonepay} alt="Iphonepay" />
                      <Image src={QPAY} alt="QPAY" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.footercopyright} alt="copyright">
              <p>Copyright © 2023 mettamuse. All rights reserved.</p>
            </div>
          </main>
        </div>
        {/* Laptop */}
        <div className={`${styles.container} ${styles.laptop}`}>
          <main className={styles.footermain}>
            <div className={styles.footercolumn}>
              <div className={styles.footercolumnfirst}>
                <h4>Be the first to know</h4>
                <div>Sign up for updates from mettā muse.</div>
                <div className={styles.footerinput}>
                  <input
                    type="text"
                    placeholder="Enter your e-mail..."
                    alt="email"
                  />
                  <button
                    className={styles.footerinputbutton}
                    type="button"
                    style={{ cursor: "pointer" }}
                  >
                    SUBSCRIBE
                  </button>
                </div>
              </div>

              <div className={styles.footercolumnsecond}>
                <div>
                  <h4 style={{ paddingTop: "40px" }}>CONTACT US</h4>
                  <ul>
                    <li>+44 221 133 5360</li>
                    <li style={{ paddingTop: "10px" }}>
                      customercare@mettamuse.com
                    </li>
                  </ul>
                </div>
                <div className={styles.footercolumnsecond2}>
                  <h4>CURRENCY</h4>
                  <ul className="">
                    <li
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <Image src={USA} alt="USA flag" />. USD
                    </li>
                    <li
                      style={{
                        fontSize: "10px",
                        fontWeight: "400",
                        paddingTop: "10px",
                      }}
                    >
                      Transactions will be completed in Euros and a currency
                      reference is available on hover,
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr style={{ border: "1px solid rgba(255, 255, 255, 0.5)" }} />
            <div className={styles.footercolumn2}>
              <div className={styles.footercolumnfirst2}>
                <div>
                  <h4>mettä muse</h4>
                  <ul>
                    <li>About Us</li>
                    <li>Stories</li>
                    <li>Artisans</li>
                    <li>Boutiques</li>
                    <li>Contact Us</li>
                    <li>EU Compliances Docs</li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                <div>
                  <h4>QUICK LINKS</h4>
                  <ul>
                    <li>Orders & Shipping</li>
                    <li>Join/Login as a Seller</li>
                    <li>Payment & Pricing</li>
                    <li>Return & Refunds</li>
                    <li>FAQs</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                  </ul>
                </div>
              </div>
              <div className={styles.footercolumnsecond2}>
                <div>
                  <h4>FOLLOW US</h4>{" "}
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Image
                      src={instagram}
                      alt="instagram"
                      style={{
                        borderRadius: "50%",
                        border: "1px solid white",
                        cursor: "pointer",
                      }}
                    />
                    <Image
                      src={Linkdin}
                      alt="Linkdin"
                      sizes="30"
                      style={{
                        borderRadius: "50%",
                        border: "1px solid white",
                        marginLeft: "10px",
                        padding: "5px",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                  <div>
                    <h4>mettä muse ACCEPTS</h4>
                    <div className={styles.footerpay}>
                      <Image src={googlpay} alt="googlpay" />
                      <Image src={mastercard} alt="mastercard" />
                      <Image src={paypal} alt="paypal" />
                      <Image src={amex} alt="amex" />
                      <Image src={Iphonepay} alt="Iphonepay" />
                      <Image src={QPAY} alt="QPAY" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.footercopyright} alt="copyright">
              <p>Copyright © 2023 mettamuse. All rights reserved.</p>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default page;
