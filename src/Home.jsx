import React from "react";
import "./styles/home.css";


const Home = () => (
  <section id="home" className="home-section">
    <div className="form-container">
      <form action="https://mail.google.com" method="POST">
        <input  type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="tel" name="phone" placeholder="Phone" required />
        <textarea name="address" placeholder="Address" required></textarea>
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  </section>
);
export default Home;
