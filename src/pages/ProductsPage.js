import React from "react";
import ProductCard from "./ProductCard";

function ProductsPage(props) {
  const products = [
    {
      id: 1,
      name: "Tomato",
      description: "Healthy organic tomatoes grown in our organic farm - Sold in kilograms",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1561136594-7f68413baa99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      name: "Radish",
      description: "Healthy organic tomatoes grown in our organic farm - Sold in kilograms",
      price: 4.99,
      image: "https://images.unsplash.com/photo-1593026122758-19bebc625104?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      name: "Lemon",
      description: "Healthy organic Lemons grown in our organic farm - Sold in kilograms",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1587496679742-bad502958fbf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      name: "Farm Eggs",
      description: "Healthy organic Lemons grown in our organic farm - Sold in dozen - 12 per dozen",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      name: "Honey",
      description:  "Healthy organic honey produced by the bees, grown by our authentic bee farms. Sold per 500ml",
      price: 10.50,
      image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 6,
      name: "Milk",
      description: "Healthy organic Milk extracted from our farm grown Cows. Fresh from the Cow farms, no preservative added. Sold per liter",
      price: 5.99,
      image: "https://images.unsplash.com/photo-1559598467-f8b76c8155d0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 7,
      name: "Ginger",
      description: "Healthy organic Ginger - Fresh from the soil Suitable to make teas - Sold per 300grams",
      price: 2.99,
      image: "https://images.unsplash.com/photo-1635843104103-ddd88e1c5141?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 8,
      name: "Garlic",
      description: "Healthy organic Garlic - Fresh from the soil Suitable to make White Sauce Pasta - Sold per 300grams",
      price: 3.99,
      image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 9,
      name: "Bell Pepper",
      description: "Healthy organic Bell peppers - Fresh from the palnts Suitable to make the best organic dinner - Sold per 500grams",
      price: 3.99,
      image: "https://images.unsplash.com/photo-1669863347362-1630fe821708?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]; 
  return (
    <>
    <section className="main intro" style={{ marginTop: '0', paddingTop: '0' }}>
      <div className="intro_section">
        {/* Your image */}
        <img style={{ width: '98.7vw',height:'40vh', objectFit:'cover'}} src='https://images.unsplash.com/photo-1498522271744-cdd435c13f24?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="hi iam shruti" />
        <h1 style={{ fontSize:'5em', color: "#0f2e0b", position: "absolute", top: "20vh", left: "50%", transform: "translateX(-50%)" }}>Shop</h1>
        
       </div>
     </section>
     <ProductCard username= {props.username} products= {products}/>
    </>
  );
}

export default ProductsPage;
