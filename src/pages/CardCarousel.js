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
    <div className="carousel-container">
      <button className="carousel-control prev" style={{fontSize:'60px'}}  onClick={goToPrevSlide}  >&#10094;</button>
      <div  className="slides-container">
        {visibleCards.map((card, index) => (
          <div key={index} className="slide" >
            <img src={card.image} alt={card.title}  />
            <h3>{card.title}</h3>
            
              <div class="product-bottom-details">
                <div class="product-price">$23.99<small> per 250g</small></div>
                <div class="product-links">
                  <a href="/"><i class="material-icons">favorite_border</i></a>
                  <a><i class="material-icons shopping_cart">shopping_cart</i></a>
                </div>
              </div>
           
          </div>
        ))}
      </div>
      <button className="carousel-control next" style={{fontSize:'60px'}} onClick={goToNextSlide}>&#10095;<span class="material-icons">
</span></button>
    </div>
  );
};

export default CardCarousel;
