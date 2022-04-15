
import './App.css';
import { Route, Routes } from 'react-router-dom';

import About from './component/About/About';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home/Home';
import ServiceDetails from './component/ServiceDetails/ServiceDetails';
import Login from './component/Login/Login';
import Register from './component/Register/Register';


function App() {

  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
