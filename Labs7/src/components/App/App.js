import './App.css';
import Header from "../Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../Footer/Footer";
import {Routes, Route} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Catalog from "../Pages/Catalog/Catalog";
import Card from "../Pages/Card/Card";


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path="card" element={<Card/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
