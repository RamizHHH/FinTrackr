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

  async function handleDelete(id) {
    try {
      await axios.delete(`http://localhost:5001/transactions/${id}`);
      setTransactions(
        transactions.filter((transaction) => transaction._id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <section>
          <h1>Transactions</h1>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Category</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction._id}>
                  <td>{transaction.category}</td>
                  <td>{transaction.description}</td>
                  <td>${transaction.amount}</td>
                  <td>{new Date(transaction.date).toLocaleDateString()}</td>
                  <td>
                    <button
                      className={styles.delButton}
                      onClick={() => handleDelete(transaction._id)}
                    >
                      Delete Transaction
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default Transactions;
