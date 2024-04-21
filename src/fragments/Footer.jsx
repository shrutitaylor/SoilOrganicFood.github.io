import React from "react";
import './Footer.css';
function Footer() {
  return (
    <>
    <footer className="mt-auto py-3 bg-dark text-white" style={{ alignItems:'center',fontFamily: "Syne, sans-serif",  fontWeight: '400',fontStyle: "normal", fontSize:'15px'}}>
      <div className="container">Soil &copy; 2022. All rights reserved.</div>
    </footer>
    <footer >
      <section class="top">
      {/* <img src="/soillogo.png" title="CopaHost logo" /> */}
        <div class="links">
         
           
            <a>Home</a>
            <a>Specials</a>
            <a>Join Us!</a>
          
         
        </div>
      </section>
      <section class="bottom">
        <p class="copyright">© 2024 All rights reserved</p>
        <p class="legal">| Soil Organic Grocer</p>
        
      </section>
    </footer>
    </>
    
  );
}

export default Footer;
