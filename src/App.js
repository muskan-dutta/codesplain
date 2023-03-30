import './App.css';
import Body from './app/pages/Body_Navbar';
import Pricing from './app/pages/Pricing';
import Navbar from './app/components/Navbar';
import Footer from './app/components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Product from './app/pages/Product';
import Why from './app/pages/Why';
import Terms from './app/Terms';

function App() {
  return (
    <Router>
    <div className="container">
    <Navbar/>
      
      <Routes>
      <Route exact path="/" element={<Body/>}/>
      <Route path="/Product" element={<Product/>}/>

          <Route path="/Why" element={<Why/>}/>
          <Route path="/Pricing" element={<Pricing/>}/>
          <Route path="/Terms" element={<Terms/>}/>
          

      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
