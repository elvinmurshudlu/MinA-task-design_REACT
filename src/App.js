import './App.css';
import {Outlet} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useState } from 'react';

function App() {

  const [themeIsDark,setTheme] = useState(()=>{
    return localStorage.getItem('theme') !=='light'
  })


  function changeTheme(){
    localStorage.setItem('theme',themeIsDark ?'light':'dark')
    setTheme(theme=>!theme)
  }

  return (
    <>
     <div id="container" style={{minHeight:'100vh'}} className={themeIsDark ? "dark-mode":''} >
     <Header changeTheme={changeTheme}></Header>
          <div class="router-container">

          <Outlet></Outlet>
          </div>

          <Footer></Footer>
    </div>
    </>
  );
}

export default App;
