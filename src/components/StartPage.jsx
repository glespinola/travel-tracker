import '../assets/styles/StartPage.css'
import Logo from '../assets/img/logo.png'
const StartPage = () => {
  return (
    <div className="StartPage">
      <h1>Travel Tracker</h1>
      <img src={Logo} alt="" />

      <div class="cssload-dots">
        <div class="cssload-dot"></div>
        <div class="cssload-dot"></div>
        <div class="cssload-dot"></div>
        <div class="cssload-dot"></div>
        <div class="cssload-dot"></div>
      </div>

      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>

      <p>Powered by
        <span className='item1'> M</span>
        <span className='item2'>I</span>
        <span className='item3'>L</span>
        <span className='item2'>O</span>
        <span className='item1'>N</span>
      </p>
    </div>
  );
};

export default StartPage;
