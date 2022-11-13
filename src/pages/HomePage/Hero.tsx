import React from "react";
import HeroButton from "../../components/HeroButton";
import { IndexProvider, useIndex } from "../../customHooks/useIndex";

function Hero() {
  const { setPositionIndex, index } = useIndex();

  return (
    <IndexProvider>
      <div className="h-screen w-full pl-2 shadow-md pt-3 pr-2 ">
        <ul className="menu menu-horizontal  w-fit mt-8 ml-8">
          <HeroButton name="Tv Series" />
          <HeroButton name="Movies" />
          <HeroButton name="Animes" />
        </ul>
      </div>
    </IndexProvider>
  );
}

export default Hero;
