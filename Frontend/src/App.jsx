import React, { useState, useEffect } from "react";
import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function App() {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    console.log("Fetching transactions from", `${backendUrl}/transactions`);
    axios
      .get(`http://localhost:5001/transactions`)
      .then((response) => setTransactions(response.data))
      .catch((error) => console.error("Error Fetching Transactions", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault;
    const newTransaction = { description, amount: parseFloat(amount) };
    console.log("Adding transaction:", newTransaction);
    axios
      .post(`http://localhost:5001/transactions`, newTransaction)
      .then((response) => {
        setTransactions([...transactions, response.data]);
        setDescription("");
        setAmount("");
      })
      .catch((error) => console.error("Error Adding Transaction", error));
  };

  return (
    <>
      <h1>FinTrackr</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit">Add Transaction</button>
      </form>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction._id}>
            {transaction.description} : ${transaction.amount}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
