import React from "react";
import metaVideo from "../../assets/videos/meta.mp4";
import PiggyBtn from "../reusable/PiggyBtn";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <video autoPlay muted loop className="w-full h-full object-cover">
        <source src={metaVideo} type="video/mp4" />
      </video>
      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-[50px] text-white m-3 leading-tight font-medium">
          We're building the future of human connection
        </h1>
        <PiggyBtn
          label="Our mission"
          color="#ffffff"
          backgroundColor="#0064e0"
          padding="10px 20px"
          style={{
            marginTop: "30px",
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
