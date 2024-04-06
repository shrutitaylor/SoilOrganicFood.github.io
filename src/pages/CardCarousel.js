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

  const visibleCards = cards.slice(currentIndex, currentIndex + 1);

  return (
    <>
     <div style={{alignItems:'center', display:'flex',flexDirection:'column',marginTop:'50px'}}>
    <h2 style={{color: '#5d2510', fontWeight:'800'}}>Products</h2>
      <h3>Want to know what we offer?</h3>
      </div>
   {/* <div className="carousel-container">
      <button className="carousel-control prev" style={{fontSize:'60px'}}  onClick={goToPrevSlide}  >&#10094;</button>
      <div  className="slides-container">
        {visibleCards.map((card, index) => (
          <div key={index} className="slide" >
            <img src={card.image} alt={card.title}  />
            <h4>{card.title}</h4>
            
              <div className="product-bottom-details">
                <div className="product-price">${card.price}<small> per {card.quantity}</small></div>
                <div className="product-links">
                  <a href='/' title="Add to Favorites"><i className="material-icons" >favorite_border</i></a>
                  <a href='/' title='Add to Cart'><i className="material-icons">shopping_cart</i></a>
                </div>
              </div>
           
          </div>
        ))}
      </div>
      <button className="carousel-control next" style={{fontSize:'60px'}} onClick={goToNextSlide}>&#10095;</button>
    </div> */}
{/* <try></try> */}
    <div className="carousel-container">
      <button className="carousel-control prev" style={{fontSize:'60px'}}  onClick={goToPrevSlide}  >&#10094;</button>
      
      <div  className="slides-container">
        {visibleCards.map((card, index) => (

          <div key={index} className="slide_card" >
            <div className='imagee'>
            <img src={card.image} alt={card.title}  />
            </div>
            <div style={{width:'200px',position:'relative'}}>
            <h2 >{card.title}</h2>
            <h3 ><b >${card.price}</b> per{card.quantity}</h3>
              
              <button>Add to Cart</button>
            </div>
          </div>

        ))}
      </div>
      <button className="carousel-control next" style={{fontSize:'60px'}} onClick={goToNextSlide}>&#10095;</button>
    </div>
    <div className='product'>
    <button>View More Products</button>
    </div>
    </>
  );
};

export default CardCarousel;
