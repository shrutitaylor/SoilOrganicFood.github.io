import React from "react";
import ProductCard from "./ProductCard";

function ProductsPage(props) {
    
  return (
    <>
    <section className="main intro" style={{ marginTop: '0', paddingTop: '0' }}>
      <div className="intro_section">
        {/* Your image */}
        <img style={{ width: '98.7vw',height:'40vh', objectFit:'cover'}} src='https://images.unsplash.com/photo-1498522271744-cdd435c13f24?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="hi iam shruti" />
        <h1 style={{ fontSize:'5em', color: "#0f2e0b", position: "absolute", top: "20vh", left: "50%", transform: "translateX(-50%)" }}>Shop</h1>
        
       </div>
     </section>
     <ProductCard username= {props.username}/>
    </>
  );
}

export default ProductsPage;
