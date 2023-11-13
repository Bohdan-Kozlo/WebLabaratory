import './App.css';
import Header from "../Pages/Home/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../Pages/Home/Footer/Footer";
import {Routes, Route} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Catalog from "../Pages/Catalog/Catalog";
import Card from "../Pages/Card/Card";
import ItemPage from "../Pages/Catalog/ItemPage/ItemPage";
import {useState} from "react";


function App() {
  const [tours, setTours] = useState([
    {
      toursId: 1,
      name: "Cuba",
      duration: 7,
      description: "Cuba is a country where time seems to stand still and music always plays street tunes. This is a place where you can enjoy Caribbean beaches.",
      cost: 1000
    },
    {
      toursId: 2,
      name: "Spain",
      duration: 5,
      description: "Spain is a country of sun, passion and rich cultural heritage. This is a place where you can enjoy the endless beaches of the Mediterranean Sea.",
      cost: 1500
    },
    {
      toursId: 3,
      name: "Italy",
      duration: 4,
      description: "Italy is a country where taste and style combine into one unforgettable travel adventure. This is a place where you can enjoy authentic pizza in Naples.",
      cost: 1000
    },
    {
      toursId: 4,
      name: "Portugal",
      duration: 8,
      description: "Portugal Cuba is a country where time seems to stand still and music always plays street tunes. This is a place where you can enjoy Caribbea.",
      cost: 1200
    },
    {
      toursId: 5,
      name: "Cipro",
      duration: 7,
      description: "Cipro Cuba is a country where time seems to stand still and music always plays street tunes. This is a place where you can enjoy Caribbean beaches, colorful colonial cities.",
      cost: 800
    },
    {
      toursId: 6,
      name: "Turkey",
      duration: 14,
      description: "Turkey Cuba is a country where time seems to stand still and music always plays street tunes. This is a place where you can enjoy Caribbean beaches, colorful colonial cities.",
      cost: 1500
    },
    {
      toursId: 7,
      name: "Cuba",
      duration: 8,
      description: "Cuba is a country where time seems to stand still and music always plays street tunes. This is a place where you can enjoy Caribbean beaches.",
      cost: 2000
    }
  ]);
  const [searchedTours, setSearchedTours] = useState(tours);


  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/catalog" element={<Catalog tours={tours} searchedTours={searchedTours} setSearchedTours={setSearchedTours} />}/>
        <Route path="card" element={<Card />}/>
        <Route path="/catalog/item/:toursID" element={<ItemPage tours={tours}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
