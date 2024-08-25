import React, { useState, createContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/dashboard/Dasboard";
import Login from './pages/dashboard/auth/Login';
import Registation from './pages/dashboard/auth/registation';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProductPage from './pages/dashboard/Product';
import ProductView from './pages/dashboard/ProductView';

// Creating context with a more descriptive name
const MyContext = createContext();

function App() {
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  const [isSidebarAndHeaderHidden, setSidebarAndHeaderHidden] = useState(false);

  // Initialize theme mode based on localStorage
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem('themeMode') === 'dark' ? false : true
  );

  const contextValues = {
    isToggleSidebar,
    setIsToggleSidebar,
    isSidebarAndHeaderHidden,
    setSidebarAndHeaderHidden,
    themeMode,
    setThemeMode
  };

  useEffect(() => {
    if (themeMode) {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      localStorage.setItem('themeMode', 'light');
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      localStorage.setItem('themeMode', 'dark');
    }
  }, [themeMode]);

  return (
    <MyContext.Provider value={contextValues}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registation" element={<Registation />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product-view" element={<ProductView />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
export { MyContext };
