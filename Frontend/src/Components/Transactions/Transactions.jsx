import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Transactions.module.css";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/transactions")
      .then((response) => setTransactions(response.data))
      .catch((error) => console.error("Error fetching transactions:", error));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <section>
          <h1>Transactions</h1>
          <ul>
            {transactions.map((transaction) => (
              <li key={transaction._id}>
                {transaction.description} - ${transaction.amount} on{" "}
                {new Date(transaction.date).toLocaleDateString()}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Transactions;
