import '../assets/styles/Register.css'
import '../assets/styles/meadiaQueries.css'
import email1 from '../assets/img/email.png'
import pass1 from '../assets/img/padlock.png'
import enter1 from '../assets/img/enter.png'
import google1 from '../assets/img/google-img-logo.png'
import { useState } from 'react'
import { useAuth } from '../context/authContext';
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const { signup } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      switch (error.code) {
        case 'auth/invalid-email':
          setError('Invalid email address')
          break;
        case 'auth/internal-error':
          setError('Please, complete all fields');
          break;
        case 'auth/weak-password':
          setError('Password should be at least 6 characters');
          break;
        case 'auth/email-already-in-use':
          setError('Email address already in use');
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="register">
      <div>
        <h1>Sing Up your account</h1>
        <p className='login'>Get started with your new account</p>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`hamburger-menu-button ${isOpen ? "open" : ""}`}
        >
          <span className="hamburger-menu-button__line"></span>
          <span className="hamburger-menu-button__line"></span>
          <span className="hamburger-menu-button__line"></span>
        </button>
        <nav
          className={`hamburger-menu-nav ${isOpen ? "open" : ""}`}
        >
          <a onClick={() => setIsOpen(!isOpen)} href="#">Home</a>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <p className="hamburger-menu-p">Made by<a href="https://github.com/glespinola" target='_blank'>glespinola</a></p>
        </nav>
      </div>
      {<p className='error-message'>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <div className='container-input'>
            <img src={email1} alt="Icon Email" />
            <input type="email" name="email" placeholder='Email address' onChange={(e) => setUser({ ...user, email: e.target.value })} />
          </div>
        </label>
        <label>
          Password:
          <div className='container-input'>
            <img src={pass1} alt="Icon Password" />
            <input type="password" name="password" placeholder='********' onChange={(e) => setUser({ ...user, password: e.target.value })} />
          </div>
        </label>
        <div className='container-input'>
          <img src={enter1} alt="Icon Enter" />
          <button type="submit">Register</button>
        </div>
        <p>Already have an account?
          <Link to="/login" >Login</Link>
        </p>
      </form>
    </div>
  )
}

export default Register