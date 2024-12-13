import React from 'react'
import video from '../Video/video.mp4'
const Video = () => {
  return (
<div className="video-container">
    <h3>TRAVEL WITH US</h3>
  <iframe
    className="video"
    width="560"
    height="315"
    src={video}
    frameborder="0"
    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
  )
}

export default Video