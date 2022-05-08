import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import Services from './Component/Service/Services';
import Detail from './Component/Detail/Detail';
import Notfound from './Component/Notfound/Notfound';
import Signin from './Component/Signin/Signin';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/services/:serviceID' element={<Detail></Detail>}></Route>
        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>

      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
