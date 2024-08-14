import React, { useContext } from "react";
import Header from "./Header";
import SideBar from "./Sidebar";
import { MyContext } from "../App"; 
const Layout = ({ children }) => {
  const context = useContext(MyContext);
  return (
    <>
      <div className="main-layout">
        <header className="header">
          <Header />
        </header>
        <div className="d-flex main-box">
          <div className={`sidebar ${context.isToggleSidebar===true ? 'toggle' : ''}`}>
            <SideBar />
          </div>
          <div className={`main-content ${context.isToggleSidebar===true ? 'toggle' : ''}`}>
            <div className="main pt-3">{children}</div>
            <footer>
              {/* <Footer /> */}
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};
export default Layout;
