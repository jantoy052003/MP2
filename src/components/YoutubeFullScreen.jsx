import React from 'react'

const YoutubeFullScreen = ({ embedId }) => {
  return (
    <div className="video-responsive">
        <iframe
        width="765"
        height="500"
        src={`https://www.youtube.com/embed/${embedId}?modestbranding=1&controls=1&autoplay=1&mute=0&rel=0`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
        allowFullScreen
        title="Embedded youtube"
        />
    </div>
  )
}

export default YoutubeFullScreen
