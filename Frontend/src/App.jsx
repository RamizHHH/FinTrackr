import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Transactions from "./Components/Transactions/Transactions.jsx";
import AddTransactions from "./Components/AddTransactions/AddTransactions.jsx";
import NavBar from "./Components/Navbar/NavBar.jsx";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Transactions} />
          <Route path="/AddTransactions" component={AddTransactions} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
