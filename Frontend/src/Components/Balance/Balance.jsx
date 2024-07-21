import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Balance.module.css";

function Balance() {
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);
  const [net, setNet] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:5001/transactions")
      .then((response) => {
        const transactions = response.data;
        const incomeTransactions = transactions.filter(
          (transaction) => transaction.amount > 0
        );
        const expenseTransactions = transactions.filter(
          (transaction) => transaction.amount < 0
        );
        setExpense(expenseTransactions);
        setIncome(incomeTransactions);

        const totalIncome = incomeTransactions.reduce(
          (acc, transaction) => acc + transaction.amount,
          0
        );
        const totalExpense = expenseTransactions.reduce(
          (acc, transaction) => acc + transaction.amount,
          0
        );
        setNet(totalExpense + totalIncome);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className={styles.moneyLists}>
        <h1> Net Balance</h1>
        <div>
          <p>
            <strong>Income:</strong> $
            {income
              .reduce((acc, transaction) => acc + transaction.amount, 0)
              .toFixed(2)}
          </p>
          <p>
            <strong>Expenses:</strong>{" "}
            {expense
              .reduce((acc, transaction) => acc + transaction.amount, 0)
              .toFixed(2)}
          </p>
          <p>
            <strong>Balance</strong>: ${net.toFixed(2)}
          </p>
        </div>
      </div>
    </>
  );
}

export default Balance;
