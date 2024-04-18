import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from './soillogo.png'; // with import

function Navbar(props) {
  // State to track the selected item
  const [selectedItem, setSelectedItem] = useState("Home");

  // Function to update the selected item when an item is clicked
  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };



  return (
    <>
    <header>
    <nav   className="navbar navbar-expand-lg navbar-light transparent-navbar" style={{  fontFamily: "Syne, sans-serif",  fontWeight: '500',fontStyle: "medium",marginTop:'0' }}>
   
      <div className="container " >
      
        <Link className="navbar-brand" to="/" onClick={() => handleItemClick("Home")}><img alt="soilLogo" width={'120px'} src={logo} /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse align-items-start" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => handleItemClick("Home")}>Home</Link>
            </li> */}
            {props.username !== null &&
              <>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/profile" onClick={() => handleItemClick("My Profile")}>Profile</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/forum" onClick={() => handleItemClick("Forum")}>Forum</Link>
                </li> */}
                <li className="nav-item">
                  <span className="nav-link text-dark">Welcome, {props.username}</span>
                </li>
              </>
            }
          </ul>
          <ul className="navbar-nav ml-auto">
            {props.username === null ?
            <>
              <li className="nav-item">
                  <Link className="nav-link" to="/" onClick={() => handleItemClick("Home")}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products" onClick={() => handleItemClick("Shop")}>Shop</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/specialsPage" onClick={() => handleItemClick("Home")}>Specials</Link>
                </li>
              <li className="nav-item login-button">
                <Link className="nav-link " to="/login" onClick={() => handleItemClick("Login")}>Login</Link>
              </li>
              <li className="nav-item login-button">
                <Link className="nav-link " to="/signup" onClick={() => handleItemClick("Signup")}>SignUp</Link>
              </li>
              </>
              :
              <>
                
                <li className="nav-item">
                  <Link className="nav-link" to="/" onClick={() => handleItemClick("Home")}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile" onClick={() => handleItemClick("My Profile")}>Profile</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products" onClick={() => handleItemClick("Shop")}>Shop</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/specialsPage" onClick={() => handleItemClick("Home")}>Specials</Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/forum" onClick={() => handleItemClick("Forum")}>Forum</Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/cart" onClick={() => handleItemClick("Cart")}>Cart</Link>
                </li>
                <li className="nav-item login-button">
                  <Link className="nav-link" to="/login" onClick={() => { handleItemClick("Login"); props.logoutUser(); }}>Logout</Link>
                </li>
              </>
            }
          </ul>
        </div>
        
        {/* Display the selected item in the h1 */}
        {/* {props.page === "Home" ? 
        <h1 style={{ fontSize:'4em', color: "#0f2e0b", position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)" }}>{props.page}</h1>
        : <h1 style={{ fontSize:'4em', color: "#0f2e0b", position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)" }}>{selectedItem}</h1>
      } */}
      </div>
      
    </nav>
    </header >
    </>
  );
}

export default Navbar;
