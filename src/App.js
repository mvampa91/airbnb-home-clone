import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import TopBanner from "./TopBanner";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from "./Footer";
let firstRender = true;

function App() {
  useEffect(() => {
    firstRender = false;
  }, []);
  if (firstRender) {
    document.documentElement.dataset.scroll = 0;
  }

  return (
    // BEM
    <Router>
      <div className="app">
        <TopBanner />
        <Header />
        <Switch>
          <Route path="/login">
            {/**<Wishlist /> */} 
          </Route>
          <Route path="/logout">
            {/**<Wishlist /> */} 
          </Route>
          <Route path="/wishlist">
            {/**<Wishlist /> */} 
          </Route>
          <Route path="/trips">
            {/**<Wishlist /> */} 
          </Route>
          <Route path="/s/homes">
            {/**<SearchHomes /> */} 
          </Route>
          <Route path="/s/experiences">
            {/**<SearchExperiences /> */} 
          </Route>
          <Route path="/s/experiences/online">
            {/**<SearchOnlineExperiences /> */} 
          </Route>
          <Route path="/guest/inbox">
            {/**<SearchOnlineExperiences /> */} 
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <div className="app__footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
