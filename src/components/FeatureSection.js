
//monika
import React from 'react'
import "../style/style.css";

const FeatureSection = () => {
  return (
    <div className='section-container'>
      <div className="features-section">
        <h2>Plan, book, go—we make it easy</h2>
        <div className="features-container">
          <div className="feature-item">
            <div className="icon-container">
              <i className="fas fa-users"></i>
            </div>
            <h3>Backed by travellers</h3>
            <p>
              See what people loved (or didn’t love) with real reviews on almost everything.
            </p>
          </div>
          <div className="feature-item">
            <div className="icon-container">
              <i className="fas fa-sync-alt"></i>
            </div>
            <h3>Free cancellation</h3>
            <p>
              Go with the flow. Most experiences can be cancelled up to 24 hours before.
            </p>
          </div>
          <div className="feature-item">
            <div className="icon-container">
              <i className="fas fa-tag"></i>
            </div>
            <h3>Lowest price, guaranteed</h3>
            <p>
              Do fun stuff without breaking the bank—we’ve got the best prices out there.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default FeatureSection