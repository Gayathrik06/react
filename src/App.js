import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login.component'
import SignUp from './components/signup.component'
import Forgot from './components/forgot.component'
import Forpas from './components/for-pass'
import Admin from './components/admin'
import User from './components/user'
function App() {

  return (
   
        <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/forgot" element={<Forgot />} />
              <Route path="/for-pass" element={<Forpas />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/user" element={<User />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>

  
  )
}
export default App