import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import Home from "./components/Home";
import Coin from "./components/Coin";
import Exchanges from "./components/Exchanges";
import CoinDetails from "./components/CoinDetails";
import Footer from "./components/Footer";
import About from "./components/About";
import Blogs from "./components/Blogs";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/coin" element={<Coin/>} />
          <Route exact path="/exchanges" element={<Exchanges/>} />
          <Route exact path="/coins/:id" element={<CoinDetails/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/blogs" element={<Blogs/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App;
