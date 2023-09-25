import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PortfolioDashboard from "./PortfolioDashboard";
import Header from "./components/header";
import TextImageSection from "./components/image-header";

function App() {
  return (
    <div>
      <Header/>
      <TextImageSection/>
    </div>
  );
}

export default App;
