// src/App.js
import React from "react"; // Import React to create the component
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom"; // Import Router, Route, and Switch from react-router-dom

import Transactions from "./Components/Transactions/Transactions.jsx"; // Import Transactions component
import AddTransactions from "./Components/AddTransactions/AddTransactions.jsx"; // Import AddTransactions component
import Home from "./Components/Home/Home.jsx";
import NavBar from "./Components/Navbar/NavBar.jsx"; // Import NavBar component
import Balance from "./Components/Balance/Balance.jsx";

// Define the main App component
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Transactions />} />
        <Route path="/AddTransactions" element={<AddTransactions />} />
        <Route path="/Balance" element={<Balance />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; // Export the App component
