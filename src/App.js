import React from "react";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";

import Students from "./Pages/Students";
import Navbar from "./Components/Navbar";
import "./App.css";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/students">
            <Students />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
