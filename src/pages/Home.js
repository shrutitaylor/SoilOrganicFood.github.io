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
    <>
      <section className="main home_intro">
        <div className="home_part_1">
          <img src="https://images.unsplash.com/photo-1620217349590-7b4e3ec6898a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Organic Farm" />
          <div className="home_text">
            <h3>Premium Organic<br />and Fresh</h3>
            <p>
              Welcome to Soil, where we champion the beauty of organic living. Our mission is simple: to provide you with the freshest, most nutritious organic foods available. From farm to table, we prioritize quality, sustainability, and ethical farming practices. Join us in embracing a healthier, more vibrant lifestyle with Soil – your trusted source for all things organic.
            </p>
          </div>
        </div>
      </section>

      <section className="main intro" style={{padding:'100px'}}>
        <div className="intro_section">
          <h2>DISCOVER</h2>
          <h3>Facts of the season!</h3>
          <div className="intro_cards">
            {[
              {
                image: "https://images.unsplash.com/photo-1642885962348-e58ad863d660?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                text: "Environmentally Friendly: Organic farming practices promote biodiversity, soil health, and reduce pollution by avoiding synthetic pesticides and fertilizers."
              },
              {
                image: "https://images.unsplash.com/photo-1551193270-975ab3ad07e9?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                text: "Health Benefits: Organic foods are free from synthetic chemicals and pesticides, making them safer and healthier for consumption. They often contain higher levels of essential nutrients and antioxidants."
              },
              {
                image: "https://images.unsplash.com/photo-1592502712628-c5219bf0bc12?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                text: "Soil Health: Organic farming focuses on soil health through practices such as crop rotation, composting, and the use of organic matter. Healthy soil promotes plant growth and resilience to pests and diseases."
              },
              {
                image: "https://images.unsplash.com/photo-1596208137668-6f9e56560887?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                text: "Global Impact: The growth of organic farming contributes to sustainable food systems worldwide, promoting environmental conservation and food security for future generations."
              },
              // Add other cards here...
            ].map((card, index) => (
              <div className="intro_card" key={index}>
                <img src={card.image} alt={`Card ${index + 1}`} />
                <div className="card_overlay">
                  <p>{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AccordionUsage />
      <ProductCard username={props.username} products={products} />
      <div className="product">
        <button>
          <Link className="nav-link" to="/products">View more Products</Link>
        </button>
      </div>
    </>
  );
}

export default Home;