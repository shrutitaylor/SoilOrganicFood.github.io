import React, { useState } from 'react';
import './CardCarousel.css'; // Import your CSS file for styling

const CardCarousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex >= cards.length ? 0 : newIndex);
  };

  const goToPrevSlide = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? cards.length - 1 : newIndex);
  };

  const visibleCards = cards.slice(currentIndex, currentIndex + 3);

  return (
    <>
    <div style={{alignItems:'center', display:'flex',flexDirection:'column'}}>
    <h2 style={{color: '#5d2510', fontWeight:'800'}}>Products</h2>
      <h3>Want to know what we offer?</h3>
      </div>
    <div className="carousel-container">
      <button className="carousel-control prev" style={{fontSize:'60px'}}  onClick={goToPrevSlide}  >&#10094;</button>
      <div  className="slides-container">
        {visibleCards.map((card, index) => (
          <div key={index} className="slide" >
            <img src={card.image} alt={card.title}  />
            <h3>{card.title}</h3>
            
              <div class="product-bottom-details">
                <div class="product-price">${card.price}<small> per {card.quantity}</small></div>
                <div class="product-links">
                  <a href='/' title="Add to Favorites"><i class="material-icons" >favorite_border</i></a>
                  <a href='/' title='Add to Cart'><i class="material-icons">shopping_cart</i></a>
                </div>
              </div>
           
          </div>
        ))}
      </div>
      <button className="carousel-control next" style={{fontSize:'60px'}} onClick={goToNextSlide}>&#10095;</button>
    </div>
    </>
  );
};

export default CardCarousel;
