
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "../css/LoginPage.css";
import { credentials } from '../assets/credentials'; 
import img from "../assets/ciscoLogo.gif";

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const user = credentials.find(
      (cred) => cred.username === username && cred.password === password
    );
    if (user) {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <div className='LogBox'>
        <div className='ltab'>
          
          <div className='img-wrap'><div className='img-holder'><img src={img} alt=""/> </div></div>
          <div className='Ltitle3'>CISCO</div>
          <div className='img-wrap'>
        </div>
        </div>
        <div className='rtab'>
          <div className="MTitle">Log in</div>
          <form onSubmit={handleLogin}>
            <div>
              <label className='labelText'>Username<br /></label>
              <input
                className='username'
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <br />
              <label className='labelText'>Password<br /></label>
              <input
                className='password'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
              <Link to="#">
                <div className="forgot-password">Forgot password?</div>
              </Link>
            <div className="footer">
              <button id="loginBtn" type="submit">LOGIN</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;