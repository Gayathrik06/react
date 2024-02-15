
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('user'); // Default to 'user'
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [selectedImage, setSelectedImage] = useState(null);

  const validateForm = () => {
    let isValid = true;
    const updatedErrors = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    // Existing validation logic...

    setErrors(updatedErrors);
    return isValid;
  };

  const handleImageClick = (type) => {
    setUserType(type);
    setSelectedImage(type);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    if (!validateForm()) {
      return;
    }

    // If all validations pass, proceed with form submission
    console.log(userType, username, email, password);
    // Add your axios post request here

    // Check the user type and navigate accordingly
    if (userType === 'admin') {
      navigate('/admin');
    } else {
      navigate('/user');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <div className="mb-3" >
      
       <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        
          <div
            onClick={() => handleImageClick('user')}
            style={{ cursor: 'pointer', marginRight: '10px' }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs_ZjDAfv-A_ErW7OZv7b2drsCHFuoQCsyfg&usqp=CAU"
              alt="User"
              style={{
                width: selectedImage === 'user' ? '100px' : '90px',
                border: selectedImage === 'user' ? '2px solid green' : 'none',
              }}
            /> <p>User</p>
            {/* {selectedImage === 'user' && (
              <img
                src="/path-to-tick-mark.png"
                alt="Tick Mark"
                style={{ position: 'absolute', top: '5px', left: '5px' }}
              />
            )} */}
          </div>
          <div
            onClick={() => handleImageClick('admin')}
            style={{ cursor: 'pointer' }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGprMfe8lkaiBIkCXvlaFj_3tDMfxZ-Q8eiw&usqp=CAU"
              alt="Admin"
              
              style={{
                width: selectedImage === 'admin' ? '100px' : '90px',
                border: selectedImage === 'admin' ? '2px solid green' : 'none',
              }}
            />
            <p>Admin</p>
            {/* {selectedImage === 'admin' && (
              <img
                src="/path-to-tick-mark.png"
                alt="Tick Mark"
                style={{ position: 'absolute', top: '5px', left: '5px' }}
              />
            )} */}
          </div>
        </div>
      </div>
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
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/sign-in">sign in?</a>
      </p>
    </form>
  );
}

export default SignUp;
