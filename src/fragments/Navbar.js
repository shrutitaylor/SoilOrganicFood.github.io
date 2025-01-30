import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from './soillogo.png'; // with import

function Navbar(props) {
  const [selectedItem, setSelectedItem] = useState("Home");

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light transparent-navbar">
        {/* Logo on the left */}
        <Link className="navbar-brand" to="/" onClick={() => handleItemClick("Home")}>
          <img alt="soilLogo" src={logo} />
        </Link>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar items on the right */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            {props.username !== null && (
              <li className="nav-item">
                <span className="nav-link text-dark">Welcome, {props.username}</span>
              </li>
            )}
            {props.username === null ? (
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
                  <Link className="nav-link" to="/login" onClick={() => handleItemClick("Login")}>Login</Link>
                </li>
                <li className="nav-item login-button">
                  <Link className="nav-link" to="/signup" onClick={() => handleItemClick("Signup")}>SignUp</Link>
                </li>
              </>
            ) : (
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
                <li className="nav-item">
                  <Link className="nav-link" to="/cart" onClick={() => handleItemClick("Cart")}>Cart</Link>
                </li>
                <li className="nav-item login-button">
                  <Link className="nav-link" to="/login" onClick={() => { handleItemClick("Login"); props.logoutUser(); }}>Logout</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;