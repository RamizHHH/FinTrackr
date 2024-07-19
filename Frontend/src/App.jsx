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

// Define the main App component
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/AddTransactions" element={<AddTransactions />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; // Export the App component
