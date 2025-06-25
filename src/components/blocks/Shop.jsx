import React from "react";
import girl from "../../assets/images/girl.jpg";
import oculus from "../../assets/images/oculus.png";
import boy from "../../assets/images/boy.jpg";
import rayban from "../../assets/images/rayban.jpg";
import PiggyBtn from "../reusable/PiggyBtn";
const Shop = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[8%]">
      <h1 className="text-[50px] m-3 w-[45%] text-center leading-none tracking-tight font-medium">
        Shop the latest devices and expand your world
      </h1>
      <div className="grid grid-cols-2 gap-[2rem] mt-[5%]">
        <div className="w-[550px]">
          <div className="w-full h-[400px] relative mb-[100px]">
            <img src={boy} alt="" className="w-full h-full rounded-[20px]" />
            <div className="w-[250px] h-auto absolute bottom-[-20px] left-[50%] -translate-x-1/2 -translate-y-0 ">
              <img src={rayban} alt="" className="bg-none" />
            </div>
          </div>
          <div className="flex items-center flex-col">
            <h3
              style={{ textShadow: "2px 2px #888888" }}
              className="text-[40px] w-[300px] text-center font-normal leading-none mb-[20px]"
            >
              Ray-Ban Meta AI Glasses
            </h3>
            <p className="text-[16px] w-[200px] text-center font-normal leading-normal mb-[20px]">
              Capture, share and stay in the moment, completely hands-free.
            </p>
            <PiggyBtn
              label="Shop now"
              color="#ffffff"
              backgroundColor="#0064e0"
              padding="10px 20px"
            />
          </div>
        </div>
        <div className="w-[550px] ">
          <div className="w-full h-[400px] relative mb-[100px]">
            <img src={girl} alt="" className="w-full h-full rounded-[20px]" />
            <div className="w-[250px] h-auto absolute bottom-[-20px] left-[50%] -translate-x-1/2 -translate-y-0 ">
              <img src={oculus} alt="" className="w-full h-full " />
            </div>
          </div>
          <div className="flex items-center flex-col">
            <h3
              style={{ textShadow: "2px 2px #888888" }}
              className="text-[40px] w-[300px] text-center font-normal leading-none mb-[20px]"
            >
              Meta Quest 3S
            </h3>
            <p className="text-[16px] w-[200px] text-center font-normal leading-normal mb-[20px]">
              Dive into the wonder of mixed reality with the new Meta Quest 3S.
            </p>
            <PiggyBtn
              label="Shop now"
              color="#ffffff"
              backgroundColor="#0064e0"
              padding="10px 20px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
