import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyUser } from "../data/repository";
import './Login.css';
function Login(props) {
  const [fields, setFields] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  // Generic change handler.
  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    // Copy fields.
    const temp = { username: fields.username, password: fields.password };
    // OR use spread operator.
    // const temp = { ...fields };

    // Update field and state.
    temp[name] = value;
    setFields(temp);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const verified = verifyUser(fields.username, fields.password);

    // If verified login the user.
    if(verified === true) {
      localStorage.setItem('user', JSON.stringify(fields.username));
      props.loginUser(fields.username, "Home"); //sending page name with the user

      // Navigate to the home page.
      navigate("/");
      return;
    }

    // Reset password field to blank.
    const temp = { ...fields };
    temp.password = "";
    setFields(temp);

    // Set error message.
    setErrorMessage("Username and / or password invalid, please try again.");
  }

  return (
    <section className="main intro" style={{ marginTop: '0', paddingTop: '0' }}>
      <div className="intro_section">
        {/* Your image */}
        <img style={{ width: '100vw',height:'40vh', objectFit:'cover'}} src='https://images.unsplash.com/photo-1498522271744-cdd435c13f24?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="hi iam shruti" />
        <h1 style={{ fontSize:'5em', color: "#0f2e0b", position: "absolute", top: "20vh", left: "50%", transform: "translateX(-50%)" }}>Login</h1>
       </div>
    
  
      {/* <h1>Login</h1> */}
      
      <div className="intro_content my-20 mx-10">
        <div className='login_container'>
          <form onSubmit={handleSubmit}>
            <div >
              <label htmlFor="username" >Username</label>
              <input name="username" id="username" className="enter_input"
                value={fields.username} onChange={handleInputChange} />
            </div>
            <div >
              <label htmlFor="password" >Password</label>
              <input type="password" name="password" id="password" className="enter_input"
                value={fields.password} onChange={handleInputChange} />
            </div>
            <div >
              <input className="login-btn" type="submit" value="Login" />
            </div>
            {errorMessage !== null &&
              <div className="form-group">
                <span className="text-danger">{errorMessage}</span>
              </div>
            }
          </form>
        </div>
      </div>
    

    </section>
  );
}

export default Login;
