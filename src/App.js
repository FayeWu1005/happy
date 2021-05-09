import React from "react";
import './App.css';

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import Search from "./pages/Search";
import Factor from "./pages/Factor";
import Ranking from "./pages/Ranking";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Charts from "./pages/Charts";

// routes
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


import  {useState} from "react";

export default function App(){
  //const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/ranking">
            <Ranking />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/factor">
            <Factor />
          </Route>
          <Route path="/charts">
              <Charts />
            </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>

    
  )
}
