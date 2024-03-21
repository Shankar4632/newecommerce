import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
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

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. this is simply dummy text.
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

          <div
            className="footercolumnsecondresp"
            style={{ backgroundColor: "blue", height: "50%" }}
          >
            <p>Hello</p>
          </div>
        </div>
        <hr style={{ border: "1px solid rgba(255, 255, 255, 0.5)" }} />
        {/* <div className="footercolumn2">
          <div className="footercolumnfirst2">
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
          <div className="footercolumnsecond2">
            <div>
              <h4>FOLLOW US</h4>{" "}
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={instagram}
                  alt="instagram"
                  style={{
                    borderRadius: "50%",
                    border: "1px solid white",
                    cursor: "pointer",
                  }}
                />
                <img
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
                <div className="footer-pay">
                  <img src={googlpay} alt="googlpay" />
                  <img src={mastercard} alt="mastercard" />
                  <img src={paypal} alt="paypal" />
                  <img src={amex} alt="amex" />
                  <img src={Iphonepay} alt="Iphonepay" />
                  <img src={QPAY} alt="QPAY" />
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="footer-copyright" alt="copyright">
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
