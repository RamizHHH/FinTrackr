import React, { useEffect, useState } from "react";
import axios from "axios";

import styles from "./AddTransactions.module.css";

function AddTransactions() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  async function handleSubmit(e) {
    e.preventDefault;
    try {
      const response = await axios.post("http://localhost:5001/transactions", {
        description,
        amount,
        category,
      });
      console.log("Transaction Added!", response.data);
      setDescription("");
      setAmount("");
      setCategory("");
    } catch (error) {
      console.error("Error Adding Transaction", error);
    }
  }
  return (
    <>
      <div>
        <h1 className={styles.heading}>Add Transactions</h1>
        <form onSubmit={handleSubmit} className={styles.formEle}>
          <input
            type="text"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Amount"
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select A Category</option>
            <option value="Food">Food</option>
            <option value="Rent">Rent</option>
            <option value="Salary">Salary</option>
          </select>
          <button type="submit">Add Transaction</button>
        </form>
      </div>
    </>
  );
}

export default AddTransactions;
