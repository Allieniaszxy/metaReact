import React from "react";
import menu from "../assets/images/menu.png";
import success from "../assets/images/success.png";
import user from "../assets/images/user-avatar.png";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-8 h-14 bg-amber-200 fixed w-screen">
      <section className="flex justify-between w-4/12">
        <img src={menu} alt="" className="w-8 h-auto hidden" />
        <img src="" alt="logo" />
        <nav>AI glasses</nav>
        <nav>Meta Quest</nav>
        <nav>Apps and games</nav>
      </section>
      <section className="flex justify-between w-1/5 items-center">
        <nav>Explore Meta</nav>
        <nav>Support</nav>
        <img src={success} alt="" className="w-6 h-auto" />
        <img src={user} alt="" className="w-6 h-auto" />
      </section>
    </div>
  );
};

export default Header;
