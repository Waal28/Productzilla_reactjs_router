import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

const Navbar = (props) => {
  return (
    <div className={styles.MainCont}>
      <div className={styles.navbarCont}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/about" className={styles.link}>
          About
        </Link>
        <Link to="/contact" className={styles.link}>
          Contact
        </Link>
      </div>
      {props.children}
    </div>
  );
};

export default Navbar;
