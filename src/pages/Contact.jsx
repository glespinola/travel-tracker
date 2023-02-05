import SideBarMenu from "../components/SideBarMenu"
import '../assets/styles/Contact.css';
const Contact = () => {
  return (
    <div className="container-contact">
      <SideBarMenu />
      <h1>Contact</h1>

      <div className="description-contact">
        <p>If you have any questions, recommendations or encounter any issues with the app, you can contact us through the form. We will be happy to assist you.</p>
      </div>

      <input type="text" name="text" id="text" placeholder="Your name" />
      <input type="email" name="email" id="email" placeholder="Your email" />
      <textarea name="message" id="message" cols="30" rows="10" placeholder="Your message"></textarea>
      <button type="submit">Send</button>


    </div>
  )
}

export default Contact