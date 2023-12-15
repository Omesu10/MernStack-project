import Registration from "./authentication/signup/signup-component";
import Login from "./authentication/login/login-component";
import { Route, Routes } from "react-router-dom";
import Homepage from "./page/home/home-component"
import Walmart from "./page/layout/walmart-component"
import Product from "./page/product/product-component";
import { AuthProvider } from "./authentication/context/AuthContext";
import './App.css';

function App() {
  return (
    <div>
      <AuthProvider>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Homepage/>} />
        <Route path="/walmart" element={<Walmart/>} />
        <Route path="/our-product" element={<Product/>}/>
      </Routes>
      </AuthProvider>
    </div>
   );
}

export default App;