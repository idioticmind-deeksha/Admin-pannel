import React, { useState, createContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/dashboard/Dasboard";
import HomePage from "./pages/dashboard/Home";
import Login from './pages/dashboard/auth/Login';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Registation from './pages/dashboard/auth/registation';

// Creating context with a more descriptive name
const MyContext = createContext();

function App() {
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  const [isSidebarAndHeaderHidden, setSidebarAndHeaderHidden] = useState(false);
  const [themeMode, setThemeMode] = useState(true);
  const contextValues = {
    isToggleSidebar,
    setIsToggleSidebar,
    isSidebarAndHeaderHidden,
    setSidebarAndHeaderHidden,
    themeMode,
    setThemeMode
  };
useEffect (() => {
if(themeMode === true) {
  document.body.classList.remove('dark');
  document.body.classList.add('light');
  localStorage.setItem('themeMode', 'light');
} else {
  document.body.classList.remove('light');
  document.body.classList.add('dark');
  localStorage.setItem('themeMode', 'dark');

}
}, [themeMode])
  return (
    <MyContext.Provider value={contextValues}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registation" element={<Registation />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
export { MyContext };
