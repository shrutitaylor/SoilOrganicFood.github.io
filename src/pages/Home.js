import React from "react";
function Home(props) {
  return (
    // <div className="text-center">
    //   {/* <h1 className="display-4">Home</h1> */}
    //   {props.username !== null && <h4><strong>Hello {props.username}!</strong></h4>}
    //   <img src={logo} className="w-50" alt="logo" />
    // </div>
    <section className="main intro" style={{ marginTop: '0', paddingTop: '0' }}>
      <div className="intro_section">
        {/* Your image */}
        <img style={{ width: '100vw',height:'100vh', objectFit:'cover'}} src='https://images.unsplash.com/photo-1498522271744-cdd435c13f24?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="hi iam shruti" />
        <h1 style={{ fontSize:'6em', color: "#0f2e0b", position: "absolute", bottom: "25vh", left: "50%", transform: "translateX(-50%)" }}>Organic and FResh</h1>
       
      </div>
    </section>
  );
}

export default Home;
