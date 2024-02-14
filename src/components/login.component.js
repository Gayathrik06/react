import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    
  });

  const validateForm = () => {
    let isValid = true;
    const updatedErrors = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    if (!username) {
      updatedErrors.username = 'Please enter a username';
      isValid = false;
    }

    if (!email) {
      updatedErrors.email = 'Please enter an email address';
      isValid = false;
    }

    if (!password) {
      updatedErrors.password = 'Please enter a password';
      isValid = false;
    }

 

    setErrors(updatedErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    if (!validateForm()) {
      return;
    }

    // If all validations pass, proceed with form submission
    console.log(username, email, password);
    // Add your axios post request here

    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign In</h3>
      <div className="mb-3">
        <label>Username</label>
        <input
          type="text"
          className={`form-control ${errors.username ? 'is-invalid' : ''}`}
          placeholder="Enter username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setErrors({ ...errors, username: '' });
          }}
        />
        {errors.username && <div className="invalid-feedback">{errors.username}</div>}
      </div>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          placeholder="Enter email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrors({ ...errors, email: '' });
          }}
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          placeholder="Enter password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrors({ ...errors, password: '' });
          }}
        />
        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
      </div>
     
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </div>
      <p className="forgot-password text-right">
        Forgot <a href="/forgot">password?</a>
      </p>
    </form>
  );
}

export default Login;
