import './App.css';
import {Outlet} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useContext, useState } from 'react';
import { Theme } from './contexts/ThemeContext';


function App() {

  const theme = useContext(Theme)

  return (
    <>

     <div id="container" style={{minHeight:'100vh'}} className={theme.theme ? "dark-mode":''} >
     <Header changeTheme={theme.changeTheme}></Header>
          <div className="router-container">

          <Outlet></Outlet>
          </div>

          <Footer></Footer>
    </div>
    </>
  );
}

export default App;
