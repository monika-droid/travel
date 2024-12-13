// Monika patel
import React from 'react'
import "../style/style.css";  

const Footer = () => {
  return (
<footer className="footer">
    <div className="footer-content">
      <div className="footer-section about">
        <h2>About Us</h2>
        <p>Explore the world with Tripster. Discover breathtaking destinations, read travel blogs, and plan your next adventure!</p>
      </div>
      <div className="footer-section links">
        <h2>Quick Links</h2>
        <ul>
          <li><a href="#">Home</a></li>
        </ul>
      </div>
      <div className="footer-section social-media">
        <h2>Follow Us</h2>
        <ul className="social-icons">
          <li><a href="https://www.facebook.com" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="https://www.twitter.com" target="_blank"><i className="fab fa-twitter"></i></a></li>
          <li><a href="https://www.instagram.com" target="_blank"><i className="fab fa-instagram"></i></a></li>
          <li><a href="https://www.linkedin.com" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
        </ul>
      </div>
    <div className="footer-bottom">
      <p>&copy; 2024 Tripster. All Rights Reserved.</p>
    </div>
  </div>
</footer>

  )
}

export default Footer
