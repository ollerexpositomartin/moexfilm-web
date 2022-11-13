import React from "react";
import Wallpaper from "../LoginPage/Wallpaper";
import Drawer from "./Drawer";
import Hero from "./Hero";
import Profile from "./Profile";

function HomePage() {
  return (
    <div className=" flex flex-row">
      <Drawer />
      <Hero/>
      <Profile/>
    </div>
  );
}

export default HomePage;
