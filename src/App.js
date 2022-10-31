import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvinder } from "./GlobalState";
import Header from "./components/header/Header";
import MainPages from "./components/mainpages/Pages";
function App() {
  return (
    <DataProvinder>
      <Router>
        <div className="App">
        <Header/>
        <MainPages/>
        </div>
      </Router>
    </DataProvinder>
  );
}

export default App;
