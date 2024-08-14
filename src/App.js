import React, { useState, createContext } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/dashboard/Dasboard";
import HomePage from "./pages/dashboard/Home";
import Login from './pages/dashboard/auth/Login';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Creating context with a more descriptive name
const MyContext = createContext();

function App() {
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  const [isSidebarAndHeaderHidden, setSidebarAndHeaderHidden] = useState(false);

  const contextValues = {
    isToggleSidebar,
    setIsToggleSidebar,
    isSidebarAndHeaderHidden,
    setSidebarAndHeaderHidden,
  };

  return (
    <MyContext.Provider value={contextValues}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
export { MyContext };
