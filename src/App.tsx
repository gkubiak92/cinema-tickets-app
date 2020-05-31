import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/header/header.component";
import HomePage from "./pages/home/homepage.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
