import "./App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeDashboard from "./EmployeeDashboard";
import DetailPage from "./DetailPage";
import { data } from "./data";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<EmployeeDashboard />} />
        <Route
          path="/employee/:id"
          element={<DetailPage employee={data.data} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
