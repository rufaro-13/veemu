//import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element = {<Home/>}></Route>
        <Route  path='/about' element= {<About/>}></Route>
        <Route  path='/contact' element= {<Contact/>}></Route>
        <Route  path='/services' element= {<Services/>}></Route>
        
       
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
