//monika patel
import React from 'react'
import joe from '../images/joe.jpg'
import dan from '../images/daniel.jpg'
import nina from '../images/nina.jpg'
import emily from '../images/emily.jpg'
import "../style/style.css";

export const Testimonial = () => {
  return (
    <div className='section-container'>
      <div className="testimonial-section">
        <div className='heading_action'>
          <h1>What Our Traveler Says</h1>
        </div>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <img src={nina} alt="Nina Jones" />
            <h3>Nina Jones</h3>
            <p>Traveler from Maldives</p>
            <p className="stars">★★★★★</p>
            <p className="review">The trip was incredible! Thanks to ThaiTravel, I discover places I never knew existed!</p>
          </div>
          <div className="testimonial-card">
            <img src={emily} alt="Emily Carter" />
            <h3>Emily Carter</h3>
            <p>Traveler from Bali</p>
            <p className="stars">★★★★★</p>
            <p className="review">Bali was an absolute dream! The stunning beaches and vibrant culture exceeded all my expectations.</p>
          </div>
          <div className="testimonial-card">
            <img src={joe} alt="Joe Smith" />
            <h3>Joe Smith</h3>
            <p>Traveler from Phuket</p>
            <p className="stars">★★★★★</p>
            <p className="review">Super organized and hassle-free. Best vacation ever!</p>
          </div>
          <div className="testimonial-card">
            <img src={dan} alt="Daniel Brooks" />
            <h3>Daniel Brooks</h3>
            <p>Traveler from Maldives</p>
            <p className="stars">★★★★★</p>
            <p className="review">From the bustling streets of Maldives to the peaceful temples in Chiang Mai, Bali offered a perfect mix of excitement and relaxation.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;