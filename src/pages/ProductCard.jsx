import React, { useEffect, useState } from 'react';

import Popup from './Popup';
import './ProductCard.css';

const ProductCard = (props) => {
  const [cart, setCart] = useState([]);
  const [popupMessage, setPopupMessage] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [reviewData, setReviewData] = useState({ stars: 0, review: '' });
  const [reviews, setReviews] = useState({}); // State to store reviews for each product
  const [editIndex, setEditIndex] = useState(-1); // Index of the review being edited

  const products = [
    {
      id: 1,
      name: "Tomato",
      description: "Healthy organic tomatoes grown in our organic farm - Sold in kilograms",
      price: "$9.99",
      image: "https://images.unsplash.com/photo-1561136594-7f68413baa99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      name: "Radish",
      description: "Healthy organic tomatoes grown in our organic farm - Sold in kilograms",
      price: "$4.99",
      image: "https://images.unsplash.com/photo-1593026122758-19bebc625104?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      name: "Lemon",
      description: "Healthy organic Lemons grown in our organic farm - Sold in kilograms",
      price: "$9.99",
      image: "https://images.unsplash.com/photo-1587496679742-bad502958fbf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      name: "Farm Eggs",
      description: "Healthy organic Lemons grown in our organic farm - Sold in dozen - 12 per dozen",
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      name: "Honey",
      description:  "Healthy organic honey produced by the bees, grown by our authentic bee farms. Sold per 500ml",
      price: "$10.50",
      image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 6,
      name: "Milk",
      description: "Healthy organic Milk extracted from our farm grown Cows. Fresh from the Cow farms, no preservative added. Sold per liter",
      price: "$5.99",
      image: "https://images.unsplash.com/photo-1559598467-f8b76c8155d0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

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
  
  
  
  const openReviewModal = (product) => {
    setSelectedProduct(product);
    setReviewData({ stars: 0, review: '' });
    setEditIndex(-1); // Reset edit index when opening modal
  };

  const closeReviewModal = () => {
    setSelectedProduct(null);
    setEditIndex(-1); // Reset edit index when closing modal
  };

  const handleReviewSubmit = () => {
    if (editIndex === -1) {
      // Adding a new review
      const updatedReviews = {
        ...reviews,
        [selectedProduct.id]: [...(reviews[selectedProduct.id] || []), reviewData]
      };
      setReviews(updatedReviews);
      localStorage.setItem('reviews', JSON.stringify(updatedReviews));
    } else {
      // Editing an existing review
      const updatedReviews = { ...reviews };
      updatedReviews[selectedProduct.id][editIndex] = reviewData;
      setReviews(updatedReviews);
      localStorage.setItem('reviews', JSON.stringify(updatedReviews));
      setEditIndex(-1); // Reset edit index after editing
    }

    closeReviewModal();
  };

  const deleteReview = (productId, index) => {
    const updatedReviews = { ...reviews };
    updatedReviews[productId].splice(index, 1); // Remove the review at the given index
    setReviews(updatedReviews);
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));
  };

  const editReview = (index) => {
    console.log("Editing review at index:", index);
    setEditIndex(index);
    setReviewData({ ...reviews[selectedProduct.id][index] }); // Set review data for editing
    openReviewModal(selectedProduct); // Make sure to open the modal
  };
  useEffect(() => {
    // Load existing reviews from local storage
    const storedReviews = JSON.parse(localStorage.getItem('reviews'));
    if (storedReviews) {
      setReviews(storedReviews);
    }
  }, []);

  return (
    <>
    <div style={{alignItems:'center', display:'flex',flexDirection:'column',margin:'50px 0 50px 0'}}>
    <h2 style={{color: '#5d2510', fontWeight:'800'}}>Products</h2>
      <h3>Want to know what we offer?</h3>
      </div>
      <section className="main intro" style={{ marginTop: '0', paddingTop: '0' }}>
        <div className="intro_section">
          <div className="product-container">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-details">
                  <h2 className="product-name">{product.name}</h2>
                  <p className="product-description">{product.description}</p>
                  <p className="product-price">{product.price}</p>
                  <button onClick={() => addToCart(product)} className="add-to-cart">Add to Cart</button>
                  {props.username && (
                    <button onClick={() => openReviewModal(product)} className="review-btn">Review</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Popup message={popupMessage}/>
      </section>
      {selectedProduct && (
        <div className="review-modal">
          <div className="modal-content">
            <span className="close" onClick={closeReviewModal}>&times;</span>
            {/* Display existing reviews for the selected product */}
            {reviews[selectedProduct.id] && reviews[selectedProduct.id].length > 0 && (
              <div>
                <h3>Existing Reviews</h3>
                <ul>
                {reviews[selectedProduct.id].map((review, index) => (
  <li key={index}>
    <div className="stars">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < review.stars ? "material-symbols-outlined filled-star" : "material-symbols-outlined outlined"}>star</span>
      ))}
    </div>
    {editIndex === index ? (
      <textarea
        value={reviewData.review}
        onChange={(e) => setReviewData({ ...reviewData, review: e.target.value })}
      />
    ) : (
      <div className="review">{review.review}</div>
    )}
    <span className="material-symbols-outlined edit-icon" onClick={() => editReview(index)}>edit</span>
    <span className="material-symbols-outlined delete_icon" onClick={() => deleteReview(selectedProduct.id, index)}>delete</span>
  </li>
))}

                </ul>
              </div>
            )}
            <div className='leave-review'>
              <h2>{editIndex === -1 ? 'Leave a Review' : 'Edit Review'}</h2>
              <p>Product: {selectedProduct.name}</p>
              {/* Review form */}
              <label>Stars: </label>
              <input type="number" min="1" max="5" value={Math.min(reviewData.stars, 5)} onChange={(e) => setReviewData({ ...reviewData, stars: e.target.value })} />
              <label>Review: </label>
              <textarea value={reviewData.review} onChange={(e) => setReviewData({ ...reviewData, review: e.target.value })}></textarea>
              <button className='submit-btn' onClick={handleReviewSubmit}>{editIndex === -1 ? 'Submit' : 'Update'}</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
