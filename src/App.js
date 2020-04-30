import React from "react";
import HomePage from "./pages/homepage/HomePage";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Shop from "./pages/shop/Shop";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
