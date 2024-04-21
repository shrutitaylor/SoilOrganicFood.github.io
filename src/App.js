import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { getUser, removeUser } from "./data/repository";
import FooterNew from "./fragments/FooterNew";
import Navbar from "./fragments/Navbar";
import Cart from "./pages/Cart";
import Checkout from "./pages/CheckoutPage";
import Forum from "./pages/Forum";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductsPage from "./pages/ProductsPage";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SpecialsPage from "./pages/SpecialsPage";
function App() {
  const [username, setUsername] = useState(getUser());
  const [page, setPage] = useState("");
  const [cart, setCart] = useState([]);

  const loginUser = (username,page) => {
    setUsername(username);
    setPage(page)
  }

  const logoutUser = () => {
    removeUser();
   
    setUsername(null);
    
  }

  return (
    <div className="d-flex flex-column min-vh-100"  style={{ fontFamily: "Syne, sans-serif",  fontWeight: '400',fontStyle: "normal", backgroundColor:'#ede1d2'}}>
      <Router>
      
        <Navbar username={username} page={page} logoutUser={logoutUser} />
        <main role="main">
          <div className="container my-0" >
            <Routes>
              <Route path="/" element={<Home username={username} />} />
              <Route path="/SoilOrganicFood.github.io" element={<Home username={username} />} />
              <Route path="/login" element={<Login loginUser={loginUser} />} />
              <Route path="/profile" element={<Profile username={username} />} />
              <Route path="/forum" element={<Forum username={username} />} />
              <Route path="/signup" element={<SignUp username={username} />} />

              <Route path="/products" element={<ProductsPage username={username} />} />
              <Route path="/specialsPage" element={<SpecialsPage username={username} />} />
              
                <Route path="/cart" element={<Cart username={username}  />} />
                <Route path="/checkout" element={<Checkout username={username}  />} />
               
             
            </Routes>
          </div>
        </main>
        <FooterNew/>
      </Router>
    </div>
  );
}

export default App;
