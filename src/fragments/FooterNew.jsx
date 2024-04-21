import logo from "./soillogo.png";
// Footer.js
import React from 'react';
import './FooterNew.css';


const FooterNew = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Website Logo" />
        </div>
        <div className="footer-location">
          <h3>Brisbane</h3>
          <ul>
            <li> 805 Lincoln Park St,<br></br> Brisbane BRI 3660</li>
          </ul>
        </div>
        <div className="footer-location">
          <h3>Melbourne</h3>
          <ul>
            <li>124 La Trobe St,<br></br> Melbourne VIC 3000</li>
            
          </ul>
        </div>
        <div className="footer-location">
          <h3>Sydney</h3>
          <ul>
            <li> 80/445 Swanston St,<br></br> Sydney MEL 3050</li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: soilorganic@grocer.com <br></br>Phone: +61 123-456-7890</p>
          
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Soil Organic Grocery. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default FooterNew;

