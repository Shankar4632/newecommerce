import Image from "next/image";
import styles from "../styles/Header.module.css"; // Importing CSS file from styles folder

// images
import image1 from "../../asserts/element.png";
import image2 from "../../asserts/searchnormal.png";
import image3 from "../../asserts/Vector.png";
import image4 from "../../asserts/shoppingbag.png";
import image5 from "../../asserts/profile.png";
import image6 from "../../asserts/arrowdown.png";
import image7 from "../../asserts/Logo.png";

const Header = () => {
  return (
    <section>
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
                src={image7}
                alt="image2"
                style={{ width: "32px", height: "32px" }}
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
