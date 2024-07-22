import Transactions from "../Transactions/Transactions.jsx";
import Balance from "../Balance/Balance.jsx";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <div className={styles.container}>
        <Transactions />
        <Balance />
      </div>
    </>
  );
}

export default Home;
