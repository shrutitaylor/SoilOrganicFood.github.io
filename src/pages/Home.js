import React from "react";
import { default as sliderClick } from 'react-card-slider-component';
import CardCarousel from "./CardCarousel";
function Home(props) {
  const cardsData = [
    {
      title: "Almonds",
      content: "This is the content of card 1.",
      image:"https://images.unsplash.com/photo-1508061253366-f7da158b6d46?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Brown Rice",
      content: "This is the content of card 2.",
      image:"https://plus.unsplash.com/premium_photo-1671130295823-78f170465794?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Red Kidney Beans",
      content: "This is the content of card 3.",
      image:"https://plus.unsplash.com/premium_photo-1671130295242-582789bd9861?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Green Beans",
      content: "This is the content of card 3.",
      image:"https://images.unsplash.com/photo-1649257171206-37625b1f3b2f?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Card 5",
      content: "This is the content of card 3.",
      image:"https://picsum.photos/200/300"
    },
    {
      title: "Card 5",
      content: "This is the content of card 3.",
      image:"https://picsum.photos/200/300"
    },
    {
      title: "Card 5",
      content: "This is the content of card 3.",
      image:"https://picsum.photos/200/300"
    },
    {
      title: "Card 5",
      content: "This is the content of card 3.",
      image:"https://picsum.photos/200/300"
    },
    {
      title: "Card 5",
      content: "This is the content of card 3.",
      image:"https://picsum.photos/200/300"
    },
    {
      title: "Card 5",
      content: "This is the content of card 3.",
      image:"https://picsum.photos/200/300"
    },
    // Add more cards as needed
  ];
  const slides = [
    {image:"https://picsum.photos/200/300",title:"This is a title",description:"This is a description",clickEvent:sliderClick},
    {image:"https://picsum.photos/600/500",title:"This is a second title",description:"This is a second description",clickEvent:sliderClick},
    {image:"https://picsum.photos/700/600",title:"This is a third title",description:"This is a third description",clickEvent:sliderClick},
    {image:"https://picsum.photos/500/400",title:"This is a fourth title",description:"This is a fourth description",clickEvent:sliderClick},
    {image:"https://picsum.photos/200/300",title:"This is a fifth title",description:"This is a fifth description",clickEvent:sliderClick},
    {image:"https://picsum.photos/800/700",title:"This is a sixth title",description:"This is a sixth description",clickEvent:sliderClick},
    {image:"https://picsum.photos/300/400",title:"This is a seventh title",description:"This is a seventh description",clickEvent:sliderClick},
]
  
  return (
    // <div className="text-center">
    //   {/* <h1 className="display-4">Home</h1> */}
    //   {props.username !== null && <h4><strong>Hello {props.username}!</strong></h4>}
    //   <img src={logo} className="w-50" alt="logo" />
    // </div>
    //Reference -https://www.w3schools.com/howto/howto_css_flip_card.asp
    <>
   
    <section className="main intro" style={{ marginTop: '0', paddingTop: '0' }}>
      <div className="intro_section">
        {/* Your image */}
        {/* <img style={{ width: '100vw',height:'100vh', objectFit:'cover'}} src='https://images.unsplash.com/photo-1498522271744-cdd435c13f24?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="hi iam shruti" /> */}
        <img style={{ width: '98.5vw',height:'100vh', objectFit:'cover'}} src='https://images.unsplash.com/photo-1620217349590-7b4e3ec6898a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', backgroundColor:'rgba(0, 0, 0, 0.3)', color: "#ffffff", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h3 style={{ fontSize:'4em', color: "#ede1d2", position: "absolute", bottom: "50vh", left: "50%", transform: "translateX(-50%)" }}>
          Premium Organic and FResh</h3>
          <p style={{color:'#cbb89d', position: "absolute",width: '50vw',bottom: "30vh",textAlign:'center'}}>
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
    
    <section className="main intro" style={{ marginTop: '50px', paddingTop: '0', position: 'relative' }}>
      <div className="intro_section">
        {/* <img style={{ width: '98.8vw', height: '90vh', objectFit: 'cover' }} src='https://images.unsplash.com/photo-1592201426550-83c4be24a0a7?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img> */}
        <img style={{ width: '98.5vw', height: '90vh', objectFit: 'cover' }} src='https://images.unsplash.com/photo-1633932850276-4382027c868a?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
        
        <div style={{  width:'55%',position: 'absolute', top: '50%', right: '15%', transform: 'translate(-50%, -50%)', textAlign: 'left', color: "#0f2e0b" }}>
          <h4 style={{color:'#6a6f4c', fontWeight:600}}>Welcome to Soil</h4>
          <h2 style={{textAlign:'left',fontWeight:'800'}}> Your Source for Organic<br></br> Goodness!</h2>
          <p style={{fontWeight:600}}>At Soil, we believe in the power of nature to nourish and sustain us. Our passion lies in providing you with the freshest, highest quality organic foods, sourced directly from trusted farmers who share our commitment to sustainable agriculture.<br></br>
          <br></br>Explore our bountiful selection of organic fruits, vegetables, grains, and more, carefully curated to bring the goodness of the earth to your table. Whether you're a seasoned organic enthusiast or just beginning your journey toward healthier living, Soil is here to support you every step of the way.<br></br>
          <br></br>Join us in embracing a lifestyle that celebrates the vitality of organic farming, fosters community connections, and promotes the well-being of both people and planet. Together, let's cultivate a healthier, happier world, one organic bite at a time.</p>
          
        </div>
      </div>

    </section>
   
    
   
    <section className="main intro" style={{ marginTop: '0', paddingTop: '0', position: 'relative' }}>
     
    <div className="card_space">
    <div className="card">
      <img  src='https://images.unsplash.com/photo-1683236030917-0552b3eb8c00?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="hi iam shruti" />
      <div className="card_content">
        <h2>Organic products support good health</h2>
      </div>
    </div>
    <div className="card">
      <img  src='https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="hi iam shruti" />
      <div className="card_content">
          <h2>Organic has something for everyone</h2>
      </div>
    </div>
    <div className="card">
        <img src='https://images.unsplash.com/photo-1511942374870-deb388a44425?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="hi iam shruti" />
        <div className="card_content" >
          <h2 >Organic prohibits the use of chemical additives</h2>
          {/* <p>Organic food contains no artificial flavors, colors or preservatives. Minor ingredients used in organic food must come from a list of approved substances that have been evaluated for safety and their impact on both human and environmental health.</p> */}
        </div>
      </div>
     </div>
    
    </section>
    <CardCarousel cards={cardsData} />
    </>
  );
}

export default Home;
