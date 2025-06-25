import React from "react";
import Header from "./static/Header";
import Hero from "./components/blocks/Hero";
import PiggyBtn from "./components/reusable/PiggyBtn";
import News from "./components/blocks/News";
import Shop from "./components/blocks/Shop";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <News />
      <Shop />
      {/* <PiggyBtn /> */}
    </div>
  );
};

export default App;
