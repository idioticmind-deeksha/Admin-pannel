import React, { useState, createContext } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/dashboard/Dasboard";
import HomePage from "./pages/dashboard/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const MyContext = createContext();

function App() {
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  const values = {
    isToggleSidebar,
    setIsToggleSidebar,
  };


  return (
    <MyContext.Provider value={values}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Dashboard" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
export { MyContext };
