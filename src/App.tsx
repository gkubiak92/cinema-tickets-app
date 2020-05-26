import React from "react";
import Header from "./components/header/header-component";
import "./App.css";
import HomePage from "./pages/home/homepage.component";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
