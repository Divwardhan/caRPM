import React from 'react'
import video from '../assets/sample.mp4'

const Video = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <video 
        className="w-full h-full object-cover object-center"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Video
