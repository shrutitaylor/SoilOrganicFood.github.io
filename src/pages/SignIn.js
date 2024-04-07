import React, { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();

    // Validation (you can add more complex validation here)
    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    // Check if user exists in localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email === email && user.password === password) {
      // Display success message
      setSuccessMessage('Login successful. Redirecting to profile page.');
      // Redirect to profile page (you can implement routing here)
      // For now, just clear the form fields
      setEmail('');
      setPassword('');
    } else {
      alert('Invalid email or password.');
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default SignIn;
