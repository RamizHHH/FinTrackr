import Transactions from "../Transactions/Transactions.jsx";
import Balance from "../Balance/Balance.jsx";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.titleHeader}>Welcome To FinTrackr</h1>
      </div>
    </>
  );
}

export default Home;
