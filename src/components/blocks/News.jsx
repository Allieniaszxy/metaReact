import React from "react";
import PiggyBtn from "../reusable/PiggyBtn";
import chat from "../../assets/images/chat.jpg";
import teen from "../../assets/images/teenAccounts.png";
import btc from "../../assets/images/btc.jpg";

const News = () => {
  return (
    <div className="flex items-center mt-32 justify-center flex-col">
      <h1 className="text-[50px] m-3">Catch up on the latest news</h1>
      <PiggyBtn
        label="See you at newsroom"
        padding="10px 12px"
        border="1px solid gray"
      />
      <div className="grid grid-cols-3 mt-[5%] gap-13">
        <div className="w-[280px]">
          <div className="w-[280px] h-[190px] mb-[15px]">
            <img src={chat} alt="" className="w-full h-full rounded-[20px]" />
          </div>
          <p>
            Introducing Oakley Meta Glasses, A New Catergory of Performing AI
            Glasses
          </p>
        </div>
        <div className="w-[280px]">
          <div className="w-[280px] h-[190px] mb-[15px]">
            <img src={teen} alt="" className="w-full h-full rounded-[20px]" />
          </div>
          <p>
            Introducing Oakley Meta Glasses, A New Catergory of Performing AI
            Glasses
          </p>
        </div>
        <div className="w-[280px]">
          <div className="w-[280px] h-[190px] mb-[15px]">
            <img src={btc} alt="" className="w-full h-full rounded-[20px]" />
          </div>
          <p>
            Introducing Oakley Meta Glasses, A New Catergory of Performing AI
            Glasses
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;
