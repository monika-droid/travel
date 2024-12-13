//Sarah macwan
import React from 'react'
import "../style/style.css";
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import Card from 'react-bootstrap/Card';
import image33 from '../images/image33.jpg'
const Blogs = () => {
  return (
    <section className="news-blogs">

      <Card className='blogs-card'>
        
        <img src={image33} alt="bali" />
        <p>
        <h1>Bali Travel Guide for First-Timers From a Veteran Visitor
        </h1>
          Bali needs no introduction – the island has become a dream destination for decades, starting with the tourism boom in the 1980s. Bali tourism has gone through some rough patches, with the rise of drug-related crimes and two terrorist bombings in the mid-2000s that claimed the lives of a staggering 202 victims, to the tourism revival that can be credited to Eat Pray Love in the 2010s. The book (and movie) has arguably led to what Bali is known for in the present day – wellness and spiritual healing, along with the beautiful beaches and nature.
          Although Balinese adheres to Hinduism, the religion found in Bali is different than the rest of the world. Balinese Hinduism is a combination of the core beliefs of Hinduism as we know that originated from India, mixed with Bali’s own traditional beliefs.
          This is perhaps why Bali is popular with domestic and foreign tourists alike – it is unique and you can’t find a place like Bali anywhere else in the world.
          In recent years, several volcano eruptions were observed at Mount Agung – the tallest volcano in Bali. This spurred some flight cancellations, although it didn’t lead to anything more serious than that since Mount Agung is far from residential and tourist areas.
          </p>
      </Card>
      <div className="header-blog">
        <h1>Latest news & Blogs</h1>
      </div>
      <div className="blogs-grid">
        <div className="blog-item large">
          <img src={img1} alt="Bali Cityscape" />
          <div className="overlay">
            <p className="category">Tips & Trick</p>
            <h2>Why Bali is the best destination for your first trip abroad</h2>
            <p className="author">by Jack Jean - 22/10/2024</p>
          </div>
        </div>
        <div className="blog-item small">
          <img src={img2} alt="Bali Temple" />
          <div className="overlay">
            <p className="category">Tips & Trick</p>
            <h2>Bali: A Paradise for the Perfect Vacation</h2>
            <p className="author">by Jack Jean - 22/10/2024</p>
          </div>
        </div>
        <div className="blog-item small">
          <img src={img3} alt="Bali Market" />
          <div className="overlay">
            <p className="category">Tips & Trick</p>
            <h2>What to See in Bali: A Guide to Exotic Places</h2>
            <p className="author">by Jack Jean - 22/10/2024</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blogs