import React, { useEffect, useState } from 'react';
import './CardCarousel.css'; // Import your CSS file for styling
import Popup from './Popup';

const CardCarousel = ({ specialProducts, props}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cart, setCart] = useState([]);
  const [popupMessage, setPopupMessage] = useState('');

  const goToNextSlide = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex >= specialProducts.length ? 0 : newIndex);
  };

  const goToPrevSlide = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? specialProducts.length - 1 : newIndex);
  };

  const visibleCards = specialProducts.slice(currentIndex, currentIndex + 1);

  //add special product to cart
  const addToCart = (product) => {
    // Check if user is logged in
    if (props.username) {
      const storedCart = JSON.parse(localStorage.getItem(`cart_${props.username}`)) || [];
      const isProductInCart = storedCart.some(item => item.id === product.id);
      if (isProductInCart) {
        setPopupMessage(`${product.name} is already in the cart.`);
      } else {
        const productWithUsername = { ...product, username: props.username };
        const updatedCart = [...storedCart, productWithUsername];
        localStorage.setItem(`cart_${props.username}`, JSON.stringify(updatedCart));
        setPopupMessage(`${product.name} has been added to the cart.`);
      }
    } else {
      // If user is not logged in, show a message or redirect to login page
      setPopupMessage('Please log in to add products to the cart.');
      // Optionally, you can redirect to the login page here
    }
  };
  
  useEffect(() => {
    // Load existing cart from local storage
    if (props.username) {
      const storedCart = JSON.parse(localStorage.getItem(`cart_${props.username}`));
      if (storedCart) {
        setCart(storedCart);
      }
    }
  }, [props.username]);
  
  
  return (
    <>
     <div style={{alignItems:'center', display:'flex',flexDirection:'column',marginTop:'50px'}}>
    <h2 style={{color: '#5d2510', fontWeight:'800'}}>Specials for the week</h2>
      <h3>Checkout the offers we have this week!</h3>
      </div>
   
{/* <try></try> */}
    <div className="carousel-container">
      <button className="carousel-control prev" style={{fontSize:'60px'}}  onClick={goToPrevSlide}  >&#10094;</button>
      
      <div  className="slides-container">
        {visibleCards.map((specialProduct, index) => (
<>
          <div  key={index} className="card">
          <img src={specialProduct.image} alt={specialProduct.name} />
              <div>
                <h2>{specialProduct.name}</h2>
                <h3>${specialProduct.price}</h3>
                <p>
                {specialProduct.description}
                </p>
                <button onClick={() => addToCart(specialProduct)}>Add to cart</button>
              </div>
          </div>
          </>
        ))}
      </div>
      <button className="carousel-control next" style={{fontSize:'60px'}} onClick={goToNextSlide}>&#10095;</button>
    </div>
    <Popup message={popupMessage}/>
    
    {/* <div className='product'>
    <button>View More Products</button>
    </div> */}
    </>
  );
};

export default CardCarousel;
