import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { getUser, removeUser } from "./data/repository";
import Footer from "./fragments/Footer";
import Navbar from "./fragments/Navbar";
import Forum from "./pages/Forum";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";

function App() {
  const [username, setUsername] = useState(getUser());

  const loginUser = (username) => {
    setUsername(username);
  }

  const logoutUser = () => {
    removeUser();
    setUsername(null);
  }

  return (
    <div className="d-flex flex-column min-vh-100" style={{ fontFamily: 'Elsie Swash Caps, serif' ,fontWeight: 700, fontSize:'20px'}}>
      <Router>
        <Navbar username={username} logoutUser={logoutUser} />
        <main role="main">
          <div className="container my-3">
            <Routes>
              <Route path="/" element={<Home username={username} />} />
              <Route path="/SoilOrganicFood.github.io" element={<Home username={username} />} />
              <Route path="/login" element={<Login loginUser={loginUser} />} />
              <Route path="/profile" element={<MyProfile username={username} />} />
              <Route path="/forum" element={<Forum username={username} />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
