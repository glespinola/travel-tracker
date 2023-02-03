import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import '../assets/styles/About.css'
import '../assets/styles/Register.css'
const About = () => {
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className='about'>
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
        <a className='btn-logout show' onClick={handleLogout}>Logout</a>
        <p className="hamburger-menu-p">Made by<a href="https://github.com/glespinola" target='_blank'>glespinola</a></p>
      </nav>
      <h1>"Travel Tracker App: Your Personal Journey Companion"</h1>
      <p>
        This app is the perfect solution for travelers looking to keep track of their journeys. Simply log your trip by adding the "Destination," the cost, and the date. The app stores all your travel logs in a database, making it easy to access and review your past trips.

        Not only does the app help you keep track of your travels, but it also provides a summary of the total amount spent on all your trips. This way, you can see the total cost of your adventures and plan your budget for future trips.

        The app also features a map view of all the places you've visited, allowing you to see your travels at a glance. You can even add photos and notes to provide a more comprehensive record of your trip.

        Whether you're a frequent traveler or just enjoy documenting your journeys, the Travel Companion App is the perfect companion for you. Keep your travels organized and never forget the details of your adventures.</p>
    </div>
  )
}

export default About