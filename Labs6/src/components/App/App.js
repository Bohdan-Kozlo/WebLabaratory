import './App.css';
import Header from "../Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from "../Hero/Hero";
import Selling from "../Selling/Selling";
import Footer from "../Footer/Footer";


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Selling/>
      <Footer/>
    </div>
  );
}

export default App;
