import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved.js";
import Search from "./pages/Search.js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import './App.css';




class App extends Component {
  render() {
    return (

      <Router>
        <div>

          <Wrapper>

            <Navbar />
            <br />
            <Header />
            <br />
            <Switch>
              <Route exact path="/saved" component={Saved} />
              <Route exact path="/search" component={Search} />
            </Switch>
            <br />
            <br />
            <br />
            <div className="row">
              <Footer />
            </div>

          </Wrapper>

        </div>
      </Router>

    );
  };
}

export default App;


