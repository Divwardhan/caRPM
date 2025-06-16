import React from 'react'

const Video = () => {
  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <iframe
        className="w-full h-full absolute top-0 left-0"
        src="https://www.youtube.com/embed/4otRbkmtDm8?autoplay=1&mute=1&loop=1&playlist=4otRbkmtDm8&controls=0&modestbranding=1&showinfo=0&rel=0"
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default Video
