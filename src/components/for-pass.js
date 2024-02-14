import React from 'react'
import { useNavigate } from "react-router-dom";
import {useState} from 'react'
function Forpas(){ 
 
  const navigate = useNavigate();
 
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
   
    password: '',
    confirmPassword: '',
  });

  const validateForm = () => {
    let isValid = true;
    const updatedErrors = {
     
      password: '',
      confirmPassword: '',
    };


    if (!password) {
      updatedErrors.password = 'Please enter a password';
      isValid = false;
    }

    if (!confirmPassword) {
      updatedErrors.confirmPassword = 'Please confirm your password';
      isValid = false;
    }

    if (password !== confirmPassword) {
      updatedErrors.confirmPassword = 'Passwords do not match';
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
    console.log( password,confirmPassword);
    // Add your axios post request here

    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Reset Password</h3>
    
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
      <div className="mb-3">
        <label>Confirm Password</label>
        <input
          type="password"
          className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
          placeholder="Enter confirm password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            setErrors({ ...errors, confirmPassword: '' });
          }}
        />
        {errors.confirmPassword && (
          <div className="invalid-feedback">{errors.confirmPassword}</div>
        )}
      </div>
    
        
        
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            submit         </button>
        </div>
       
      </form>
    )
  }

  export default Forpas;