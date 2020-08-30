import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import TopBanner from "./TopBanner";

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
    <div className="app">
      <TopBanner />
      <Header />

      <Home />
    </div>
  );
}

export default App;
