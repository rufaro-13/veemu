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
    <BrowserRouter basename='/'>
      <Routes>
        <Route forceRefresh={true} path="/" element={<Layout/>}>
        <Route forceRefresh={true} index element = {<Home/>}></Route>
        <Route forceRefresh={true} path='/about' element= {<About/>}></Route>
        <Route forceRefresh={true} path='/contact' element= {<Contact/>}></Route>
        <Route forceRefresh={true} path='/services' element= {<Services/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
