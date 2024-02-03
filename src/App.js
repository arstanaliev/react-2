import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Servis from './pages/Site/Servis/Servis';
import OurJob from './pages/Site/OurJob/OurJob';
import Product from './pages/Site/Product/Product';
import Studio from './pages/Site/Studio/Studio';
import Technology from './pages/Site/Technology/Technology';
import Footer from './pages/Site/Footer/Footer';
function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
      <Route path='/logo'element={"Logos"}/>
     </Routes>
     


    </div>

  );
}

export default App;
