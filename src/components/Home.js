//monika patel

import React from "react";
import "../style/style.css";
import dark_arrow from "../images/dark-arrow.png";
import Testimonial from "./Testimonial";
import { useNavigate } from "react-router-dom";
import FeatureSection from "./FeatureSection";
import Navbar from "./Navbar";
import img from '../images/img.jpg'
function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="hero-text">
          <h1>TOUR DESTINATIONS</h1>
          <p>
            Escape to a world of breathtaking landscapes, serene beaches, and
            rich cultural experiences. Whether you seek adventure, relaxation,
            or a mix of both, this destination has everything you need to create
            unforgettable memories.
          </p>
          <button
            className="btn"
            onClick={() => navigate("/destination")}
          >
            Explore More <img src={dark_arrow} alt="arrow" />
          </button>
        </div>
      </div>

      <FeatureSection />
      <section id="about-us" class="about-us">
        <div class="container">
          <div class="about-content">
            <div class="about-text">
              <h2>About Us</h2>
              <p>Welcome to <strong>Tripster</strong>, your ultimate travel companion! We are a passionate team of travel enthusiasts dedicated to helping you explore the world and create lasting memories. Whether you’re seeking thrilling adventures, serene getaways, or deep cultural experiences, we’re here to guide you every step of the way.</p>
              <p>At <strong>Tripster</strong>, we believe that travel is more than just visiting new places; it's about discovering the world through unique experiences, connecting with new cultures, and expanding your horizons. Our mission is to inspire, educate, and assist you in planning trips that not only meet your expectations but exceed them.</p>
            </div>
            <div class="about-image">
              <img src={img} alt="Travel Experience" />
            </div>
          </div>
        </div>
      </section>

      <Testimonial />
    </>
  );
}

export default Home;
