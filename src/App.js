import './App.css';
import {Outlet} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
     <div id="container" style={{minHeight:'100vh'}} className="dark-mode" >
     <Header></Header>
          <div class="router-container">

          <Outlet></Outlet>
          </div>

          <Footer></Footer>
    </div>
    </>
  );
}

export default App;
