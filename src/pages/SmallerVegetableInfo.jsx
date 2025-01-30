import React from 'react';
import './SmallerVegetableInfo.css'; // Import your CSS file for styling

const SmallerVegetableInfo = () => {
    const vegetables = [
        {
          id: 101,
          name: "Cherry Tomatoes",
          image: "https://images.unsplash.com/photo-1615840988736-9e16de7a43f1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 102,
            name: "Mini bell peppers",
            image: "https://images.unsplash.com/photo-1607546900609-7efd29a4a2dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            id: 103,
            name: "Baby Carrots",
            image: "https://images.unsplash.com/photo-1639427444459-85a1b6ac2d68?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            id: 104,
            name: "Radishes",
            image: "https://images.unsplash.com/photo-1593026122758-19bebc625104?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            id: 105,
            name: "Mini Cucumbers",
            image: "https://images.unsplash.com/photo-1518568403628-df55701ade9e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
      ]
  return (
    <div className="smaller-vegetable-info-card " style={{margin:'20px'}}>
      <div className="card-content">
      <h2 className="heading">Grow Your Own Smaller Vegetables</h2>
        <p>
          Growing smaller vegetables in your backyard can be a rewarding and satisfying experience. Whether you have limited space or simply prefer smaller varieties, there are plenty of options to choose from.
        </p>
        <div className="image-row">
          <img src="https://images.unsplash.com/photo-1620862291735-afb22f894311?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Vegetable" className="image" />
          <img src="https://images.unsplash.com/photo-1615671524827-c1fe3973b648?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Vegetable" className="image" />
          <img src="https://images.unsplash.com/photo-1638402268441-9368026c1d45?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Vegetable" className="image" />
        </div>
        <h2 className="heading">Benefits of Growing Smaller Vegetables:</h2>
        <ul>
          <li>Requires less space, making it suitable for small gardens or even containers.</li>
          <li>Can be grown closer together, maximizing yield in limited space.</li>
          <li>Often mature faster than larger varieties, allowing for quicker harvests.</li>
          <li>Great for beginners or those with limited gardening experience.</li>
        </ul>
        <h3 className="heading">Popular Smaller Vegetables to Grow:</h3>
       
        <div className="circle-image-row">
        {vegetables.map((veg, index) => (
          <div key={index} className="circle-image-container">
            <img src={veg.image} alt={veg.name} className="circle-image" />
            <div className="image-text">{veg.name}</div>
          </div>
          ))}
        </div>
        <p>
          <i>With proper care and attention, you can enjoy a bountiful harvest of delicious smaller vegetables right from your own backyard!
          </i></p>
      </div>
    </div>
  );
};

export default SmallerVegetableInfo;
