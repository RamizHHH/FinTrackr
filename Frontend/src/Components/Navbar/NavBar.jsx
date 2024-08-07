import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import Balance from "../Balance/Balance.jsx";
import FinTrackrImage from "../../assets/FinTrackr.png";

const NavBar = () => {
  return (
    <>
      <nav className={styles.navBar}>
        <img src={FinTrackrImage} />
        <h3>FinTrackr</h3>
        <ul>
          <li>
            <Link to="/" className={styles.navlink}>
              Home
            </Link>{" "}
          </li>
          <li>
            <Link to="/Transactions" className={styles.navlink}>
              Transactions
            </Link>{" "}
          </li>
          <li>
            <Link to="/AddTransactions" className={styles.navlink}>
              Add Transactions
            </Link>{" "}
          </li>
          <li>
            <Link to="/Balance" className={styles.navlink}>
              Balance
            </Link>{" "}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar; // Export the NavBar component
