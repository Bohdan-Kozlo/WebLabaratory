import Header from "../Pages/Home/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../Pages/Home/Footer/Footer";
import {Routes, Route} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Catalog from "../Pages/Catalog/Catalog";
import Card from "../Pages/Card/Card";
import ItemPage from "../Pages/Catalog/ItemPage/ItemPage";
import {useEffect, useState} from "react";
import TourService from "../../API/TourService";
import './App.css'
import Loading from "../Pages/Catalog/Loading/Loading";


function App() {
  const [tours, setTours] = useState([]);
  const [isToursLoading, setIsToursLoading] = useState(false);


  useEffect(() => {
    fetchTours();


    const delayTimeout = setTimeout(() => {
      setIsToursLoading(false);
    }, 800);

    return () => clearTimeout(delayTimeout);
  }, []);

  async function fetchTours() {
    setIsToursLoading(true)
    const tours = await TourService.getAll();
    setTours(tours);
  }


  return (
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          {isToursLoading ? <Route path="/catalog" element={<Loading/>}/> :
              <Route path="/catalog" element={<Catalog tours={tours}/>}/>}
          <Route path="/card" element={<Card/>}/>
          <Route path="/catalog/item/:toursID" element={<ItemPage tours={tours}/>}/>
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
