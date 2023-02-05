import '../App.css';
import { useState, useEffect } from 'react'
import { useAuth } from '../context/authContext';
import { db } from '../firebase';
import { collection, addDoc, doc, onSnapshot, query, querySnapshot, where } from "firebase/firestore";
import SideBarMenu from '../components/SideBarMenu';

function calculateTotal(trips) {
  return trips.reduce((acc, trip) => acc + parseFloat(trip.price), 0).toFixed(2);
}


const Home = () => {
  const { user } = useAuth();
  const [trips, setTrips] = useState([]);
  const total = calculateTotal(trips);

  const travelsCollection = collection(db, "travels");
  const q = query(travelsCollection, where("userId", "==", user.uid));

  useEffect(() => {
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let newTrips = [];
      querySnapshot.forEach((doc) => {
        newTrips = [...newTrips, doc.data()]
      });
      setTrips(newTrips.filter(trip => trip.userId === user.uid));
    });

    return () => unsubscribe();
  }, []);


  const handleSubmit = async (event) => {
    event.preventDefault();
    const newTrip = {
      id: `${Date.now()}`,
      userId: user.uid,
      destination: event.target.destination.value,
      price: event.target.price.value,
      date: event.target.date.value,
    };
    await addDoc(travelsCollection, newTrip);
  };
  return (
    <div className="container">
      <SideBarMenu />
      <div className="welcome">
      </div>
      <h1>Travel Tracker</h1>
      <p className="welcome-p" >Welcome {user.displayName || user.email}</p>
      <form onSubmit={handleSubmit} className="form-container">
        <label>
          Destination:
          <input type="text" name="destination" autoFocus placeholder='travel' />
        </label>
        <label>
          Price:
          <input type="number" name="price" placeholder='$0.00' />
        </label>
        <label>
          Date:
          <input type="date" name="date" className="date-input" />
        </label>
        <button type="submit">Add Trip</button>
      </form>
      <div className='spent'>
        Total spent: $ {total}
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th className='sticky'>Destination</th>
              <th className='sticky'>Price</th>
              <th className='sticky'>Date</th>
            </tr>
          </thead>
          <tbody>
            {trips.map((trip, index) => (
              <tr key={index}>
                <td>{trip.destination}</td>
                <td>${trip.price}</td>
                <td>{trip.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home