import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NumberOrWord from "./components/NumberOrWord";
import StyledWord from "./components/StyledWord";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/:input" element={<NumberOrWord />} />
          <Route path="/:word/:textColor/:bgColor" element={<StyledWord />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
