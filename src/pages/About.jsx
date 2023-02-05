import '../assets/styles/Register.css'
import '../assets/styles/About.css'
import SideBarMenu from '../components/SideBarMenu';

const About = () => {

  return (
    <div className='about'>
      <SideBarMenu />
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