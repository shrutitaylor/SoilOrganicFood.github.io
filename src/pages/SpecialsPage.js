import React from "react";
import CardCarousel from "./CardCarousel";

function SpecialsPage(props) {
    const cardsData = [
    
        {
          title: "Brown Rice",
          content: "This is the content of card 2.",
          image:"https://plus.unsplash.com/premium_photo-1671130295823-78f170465794?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price:"12.9",
          quantity:'500g'
        },
        {
          title: "Red Kidney Beans",
          content: "This is the content of card 3.",
          image:"https://plus.unsplash.com/premium_photo-1671130295242-582789bd9861?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price:"12.9",
          quantity:'500g'
        },
        {
          title: "Green Beans",
          content: "This is the content of card 3.",
          image:"https://images.unsplash.com/photo-1649257171206-37625b1f3b2f?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price:"12.9",
          quantity:'500g'
        },
        {
          title: "Card 5",
          content: "This is the content of card 3.",
          image:"https://picsum.photos/200/300",
          price:"12.9",
          quantity:'500g'
        },
        {
          title: "Card 5",
          content: "This is the content of card 3.",
          image:"https://picsum.photos/200/300",
          price:"12.9",
          quantity:'500g'
        },
        {
          title: "Card 5",
          content: "This is the content of card 3.",
          image:"https://picsum.photos/200/300",
          price:"12.9",
          quantity:'500g'
        },
        
        // Add more cards as needed
      ];
  return (
    <>
    <section className="main intro" style={{ marginTop: '0', paddingTop: '0' }}>
      <div className="intro_section">
        {/* Your image */}
        <img style={{ width: '100vw',height:'40vh', objectFit:'cover'}} src='https://images.unsplash.com/photo-1498522271744-cdd435c13f24?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="hi iam shruti" />
        <h1 style={{ fontSize:'5em', color: "#0f2e0b", position: "absolute", top: "20vh", left: "50%", transform: "translateX(-50%)" }}>SpecialsPage</h1>
       </div>
    <div className="intro_content">
    <div>
      {/* <h1 className="display-4">My Profile</h1> */}
      <h4><strong>Hello {props.username}!</strong></h4>
    </div>
    </div>
    </section>
    <CardCarousel cards={cardsData} />
    </>
  );
}

export default SpecialsPage;
