import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Discover from "./pages/Discover";
import Saved from "./pages/Saved";
// import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import './App.css';

function App() {
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
            <Route exact path="/search" component={SearchForm} />
          </Switch>
          <br />
          <div className="row">
            <Footer />
          </div>
          
        </Wrapper>

      </div>
    </Router>
  );
}

export default App;

