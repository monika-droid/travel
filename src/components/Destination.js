//jhanani 
import React from "react";
import "../style/style.css";
import Indonesia from '../images/bali.jpg'
import veitnam from '../images/Vietnam.jpg'
import Maldives from '../images/maldives.jpg'
import japan from '../images/japan.jpg'
import icon from '../images/icon.svg'
const Destination = () => {
  return (
    <>
    <section>
    <div class="container-destination">
        <div class="title">Use AI to plan a trip to a traveller-loved spot</div>
        <div class="card-grid">
            <div class="card">
                <div class="icon"><img src={icon} alt="icon"/></div>
                <img src={Indonesia} alt="Indonesia"/>
                <h3>Indonesia</h3>
            </div>
            <div class="card">
                <div class="icon"><img src={icon} alt="icon"/></div>
                <img src={veitnam} alt="veitnam"/>
                <h3>veitnam</h3>
            </div>
            <div class="card">
                <div class="icon"><img src={icon} alt="icon"/></div>
                <img src={Maldives} alt="Maldives"/>
                <h3>Maldives</h3>
            </div>
            <div class="card">
                <div class="icon"><img src={icon} alt="icon"/></div>
                <img src={japan} alt="japan"/>
                <h3>japan</h3>
            </div>
        </div>
    </div>
    </section>
      <section className="popular-destinations">
          <h1>Popular Destinations</h1>
        <div className="grid-container">
          <div className="destination-card">
            <div className="image img1">
              <span className="rating">5 ★</span>
            </div>
            <div className="details">
              <h3>Mexico</h3>
              <p>$200 per person</p>
            </div>
          </div>
          <div className="destination-card">
            <div className="image img2">
              <span className="rating">4.8 ★</span>
            </div>
            <div className="details">
              <h3>Maldives</h3>
              <p>$800 per person</p>
            </div>
          </div>
          <div className="destination-card">
            <div className="image img3">
              <span className="rating">4.9 ★</span>
            </div>
            <div className="details">
              <h3>Bali</h3>
              <p>$700 per person</p>
            </div>
          </div>
          <div className="destination-card">
            <div className="image img4">
              <span className="rating">4.7 ★</span>
            </div>
            <div className="details">
              <h3>Borobudur Temple</h3>
              <p>$650 per person</p>
            </div>
          </div>
          <div className="destination-card">
            <div className="image img5">
              <span className="rating">4.6 ★</span>
            </div>
            <div className="details">
              <h3>Phuket: Phi Phi Island</h3>
              <p>$200 per person</p>
            </div>
          </div>
          <div className="destination-card">
            <div className="image img8">
              <span className="rating">4.5 ★</span>
            </div>
            <div className="details">
              <h3>Ubud -Bali
              </h3>
              <p>$200 per person</p>
            </div>
          </div>
          <div className="destination-card">
            <div className="image img10">
              <span className="rating">4.8 ★</span>
            </div>
            <div className="details">
              <h3>Japan</h3>
              <p>$600 per person</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Destination;
