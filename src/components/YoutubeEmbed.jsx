import React from "react";
import PropTypes from "prop-types";
import '../style/YoutubeEmbed.css'

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="765"
      height="500"
      src={`https://www.youtube.com/embed/${embedId}?modestbranding=1&controls=1&autoplay=1&mute=0&rel=0&showinfo=0`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;