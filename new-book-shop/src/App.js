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
import Signup from './Component/Signup/Signup';
import Checkout from './Component/Checkout/Checkout';
import Requireauth from './Component/Requireauth/Requireauth';
import Update from './Component/Update/Update';
import Additems from './Component/Additem/Additems';
import Deleteitem from './Component/Deleteitem/Deleteitem';
import Myitems from './Component/Myitems/Myitems';
import Blogs from './Component/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Services></Services>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/additem' element={<Requireauth><Additems></Additems></Requireauth>}></Route>
        <Route path='/myitems' element={<Requireauth><Myitems></Myitems></Requireauth>}></Route>
        {/* <Route path='/delete' element={<Requireauth><Deleteitem></Deleteitem></Requireauth>}></Route> */}
        <Route path='/products/:serviceID' element={<Detail></Detail>}></Route>
        <Route path='/update/:serviceID' element={<Requireauth><Update></Update></Requireauth>}></Route>
        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/checkout' element={<Requireauth><Checkout></Checkout></Requireauth>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>

      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
