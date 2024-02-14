import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Forgot() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');

  
  const [errors, setErrors] = useState({

    email: '',

    
  });

  const validateForm = () => {
    let isValid = true;
    const updatedErrors = {
      username: '',
      email: '',
    
    };

    if (!email) {
      updatedErrors.email = 'Please enter an email address';
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
    console.log( email);
    // Add your axios post request here

    navigate('/for-pass');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Forgot password</h3>
 
       
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
      
     
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          next
        </button>
      </div>
     
    
    </form>
  );
}
export default Forgot;
