import React from "react";
import metaVideo from "../assets/videos/meta.mp4";

const Hero = () => {
  return (
    <div className="w-full h-4/5 relative">
      <video autoPlay muted loop className="w-full h-full object-cover">
        <source src={metaVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;
