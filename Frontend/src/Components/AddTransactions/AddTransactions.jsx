import React, { useEffect, useState } from "react";
import axios from "axios";

function AddTransactions() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  async function handleSubmit(e) {
    e.preventDefault;
    try {
      const response = await axios.post("http://localhost:5001/transactions", {
        description,
        amount,
      });
      console.log("Transaction Added!", response.data);
      setDescription("");
      setAmount("");
    } catch (error) {
      console.error("Error Adding Transaction", error);
    }
  }
  return (
    <>
      <div>
        <h1>Add Transactions</h1>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Add Transaction</button>
        </form>
      </div>
    </>
  );
}

export default AddTransactions;
