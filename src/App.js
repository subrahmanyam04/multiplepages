import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from  './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Services from './pages/Services';


 

function App() {
  return (
<div className="App">
<Header/>
<Routes>
<Route path="/" element={ <Home/> }/>
<Route path="/About" element={ <About/> }/>
<Route path="/Contact" element={ <Contact/> }/>
<Route path="/Products" element={ <Products/> }/>
<Route path="/Services" element={ <Services/> }/>

</Routes>
<Footer />
    </div>
  );
}

export default App;
