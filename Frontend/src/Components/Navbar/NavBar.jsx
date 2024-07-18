import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Transactions</Link>
          </li>
          <li>
            <Link to="/AddTransactions">Add Transactions</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
