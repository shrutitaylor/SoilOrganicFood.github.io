import React from "react";
import { Link } from "react-router-dom";
import AccordionUsage from "./HealthBenefits";
import ProductCard from "./ProductCard";
function Home(props) {
  
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
    }
  ];
  
  return (
    // <div className="text-center">
    //   {/* <h1 className="display-4">Home</h1> */}
    //   {props.username !== null && <h4><strong>Hello {props.username}!</strong></h4>}
    //   <img src={logo} className="w-50" alt="logo" />
    // </div>
    //Reference -https://www.w3schools.com/howto/howto_css_flip_card.asp
    <>
   
    <section className="main home_intro" style={{ marginTop: '0', paddingTop: '0' }}>
     
       <div className="home_part_1"> 
       <img src='https://images.unsplash.com/photo-1620217349590-7b4e3ec6898a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
        <div className="home_text">
        <h3 > Premium Organic<br></br> and FResh</h3>
          <p  >
          Welcome to Soil, where we champion the beauty of organic living. Our mission is simple: to provide you with the freshest, most nutritious organic foods available. From farm to table, we prioritize quality, sustainability, and ethical farming practices. Join us in embracing a healthier, more vibrant lifestyle with Soil – your trusted source for all things organic.</p>
        </div>
        </div>
   
      </section>
      <section className="main intro" style={{ marginTop: '50px', paddingTop: '0' }}>
      <div className="intro_section">
      <h2 style={{color: '#5d2510', fontWeight:'800'}}>DISCOVER</h2>
      <h3>Facts of the season!</h3>
      <div className="intro_cards">
      <div className="intro_card">
        <img src='https://images.unsplash.com/photo-1642885962348-e58ad863d660?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
        <div className="card_overlay">
          <p><b>Environmentally Friendly:</b><br></br> Organic farming practices promote biodiversity, soil health, and reduce pollution by avoiding synthetic pesticides and fertilizers.</p>
        </div>
      </div>
      <div className="intro_card">
      <img  src='https://images.unsplash.com/photo-1592502712628-c5219bf0bc12?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <div className="card_overlay">
          <p><b>Health Benefits: </b><br></br> Organic foods are free from synthetic chemicals and pesticides, making them safer and healthier for consumption. They often contain higher levels of essential nutrients and antioxidants.</p>
        </div>
      </div>
      {/* <div className="intro_card">
      <img  src='https://images.unsplash.com/photo-1550547660-5d719a574887?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <div className="card_overlay">
          <p><b>Environmentally Friendly:</b><br></br> Organic farming practices promote biodiversity, soil health, and reduce pollution by avoiding synthetic pesticides and fertilizers.</p>
        </div>
      </div> */}
      <div className="intro_card">
      <img  src='https://images.unsplash.com/photo-1596208137668-6f9e56560887?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <div className="card_overlay">
          <p><b>Soil Health: </b><br></br> Organic farming focuses on soil health through practices such as crop rotation, composting, and the use of organic matter. Healthy soil promotes plant growth and resilience to pests and diseases.</p>
        </div>
      </div>
      <div className="intro_card">
      <img  src='https://images.unsplash.com/photo-1551193270-975ab3ad07e9?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />     
      <div className="card_overlay">
          <p><b>Global Impact: </b><br></br>The growth of organic farming contributes to sustainable food systems worldwide, promoting environmental conservation and food security for future generations.</p>
        </div>
      </div>
      </div>
</div>
     
      
    
    </section>
    
    <section className="main home_intro" style={{ marginTop: '50px', position: 'relative' }}>
      <div className="home_part_1">
        <img  src='https://images.unsplash.com/photo-1633932850276-4382027c868a?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
        <div className="home_text ">
          <h4 style={{ color:'#cbb89d', fontWeight:600, fontSize: '18px' }}>Welcome to Soil</h4>
          <h2 style={{ color:'rgb(58 22 9)',textAlign:'center', fontWeight:'800', fontSize: '40px' }}> Your Source for Organic<br></br> Goodness!</h2>
          <p style={{ color:'rgb(252 241 226)'}} >At Soil, we believe in the power of nature to nourish and sustain us. Our passion lies in providing you with the freshest, highest quality organic foods, sourced directly from trusted farmers who share our commitment to sustainable agriculture.<br></br><br></br>Explore our bountiful selection of organic fruits, vegetables, grains, and more, carefully curated to bring the goodness of the earth to your table.<br></br><br></br>Join us in embracing a lifestyle that celebrates the vitality of organic farming, fosters community connections, and promotes the well-being of both people and planet. Together, let's cultivate a healthier, happier world, one organic bite at a time.</p>
        </div>
      </div>
    </section>

    
   
    
    <AccordionUsage/>
    <ProductCard username= {props.username} products={products}/>
    <div className='product'>
    <button ><Link className="nav-link" style={{color:'#ede1d2'}} to="/products">View more Products</Link></button>
    </div>
    </>
  );
}

export default Home;
