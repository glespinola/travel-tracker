import '../assets/styles/Register.css'
import '../assets/styles/meadiaQueries.css'
import email1 from '../assets/img/email.png'
import pass1 from '../assets/img/padlock.png'
import enter1 from '../assets/img/enter.png'
import google1 from '../assets/img/google-img-logo.png'
import { useState } from 'react'
import { useAuth } from '../context/authContext';
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Login = () => {

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })


  const { login, loginWithGoogle } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleGoogle = async () => {
    await loginWithGoogle();
    navigate("/");
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(user.email, user.password);
      navigate("/");
      Toast.fire({
        icon: 'success',
        title: 'Login Successful'
      })
    } catch (error) {
      switch (error.code) {
        case 'auth/invalid-email':
          setError('Invalid email, please try again');
          break;
        case 'auth/internal-error':
          setError('Please, complete all fields');
          break;
        case 'auth/user-not-found':
          setError('User not found, please try again');
          break;
        case 'auth/wrong-password':
          setError('Wrong password, please try again...');
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="register">
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
        <a href="#">About</a>
        <a href="#">Contact</a>
        <p className="hamburger-menu-p">Made by<a href="https://github.com/glespinola" target='_blank'>glespinola</a></p>
      </nav>
      <div>
        <h1>Sing In your account</h1>
        <p className='login'>Get started with your account</p>

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
          <button type="submit">Login</button>
        </div>
        <span>or</span>
        <div className='container-input'>
          <img src={google1} alt="Icon Enter" />
          <button className='google' onClick={handleGoogle}>Sign In with Google</button>
        </div>
        <p>Don't have an account?
          <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  )
}

export default Login