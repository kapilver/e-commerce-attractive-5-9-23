
import './App.css';
import {BrowserRouter , Routes ,Route} from "react-router-dom"
import Footer from './Components/Footer';
import Nav from "./Components/Nav";
import SignUp from './Components/SignUp'
import Login from './Components/login';
import AddProduct from './Components/AddProduct';
import PrivateComponent from './Components/PrivateComponent'
import ProductsList from './Components/ProductsList';
import UpdateProduct from './Components/UpdateProduct'
import ForgotPassword from './Components/forgotPassword';
import ResetPassword from './Components/Reset-password';
import AboutUs from './Components/AboutUs';
import FAQ from './Components/FAQ';
import DevileryInformation from './Components/DevileryInformation'
import Portfolio from './Components/Portfolio';
import Development from './Components/Development';
import Blogs from './Components/Blogs';
import Team from './Components/Team';
function App() {
  return (

    <div className="App">

      <BrowserRouter>
    <Nav/>
    <Routes>  

      <Route element={<PrivateComponent/>}>

      <Route path = "/" element = {<ProductsList/>} ></Route>
      <Route path = "/add-product" element = {<AddProduct/>} ></Route>
      <Route path = "/update/:id" element = {<UpdateProduct/>} ></Route>
      <Route path = "/AboutUs" element = {< AboutUs/>} ></Route>
      <Route path = "/logout" element = {<h1>Logout listinng component</h1>} ></Route>
      <Route path = "/profile" element = {<h1>Profile listinng component</h1>} ></Route>
      <Route path = "/FAQ" element = {<FAQ/>} ></Route>
      <Route path='/DevileryInformation' element={<DevileryInformation/>}> </Route>
      <Route path='/Portfolio' element={<Portfolio/>} ></Route>
      <Route path='/Development' element={<Development/>} ></Route>
      <Route path='/Blogs' element={<Blogs/>} ></Route>
      <Route path='/Team' element={<Team/>} ></Route>

      </Route>
      <Route path = "/SignUp" element = {<SignUp/>} ></Route>
      <Route path = "/login" element = {<Login/>} ></Route>
      <Route path = "/forgotPassword" element = {<ForgotPassword/>} ></Route>
      <Route path = "/Reset-password" element = {<ResetPassword/>} ></Route>
   
   

    </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
 
  );
}

export default App;
