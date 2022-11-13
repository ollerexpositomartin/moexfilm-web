import React from "react";
import { IndexProvider } from "../../customHooks/useIndex";
import Wallpaper from "../LoginPage/Wallpaper";
import Drawer from "./Drawer";
import Hero from "./Hero";
import Profile from "./Profile";

function HomePage() {
  return (
    <div className=" flex flex-row">
      <IndexProvider>
      <Drawer />
      </IndexProvider>
      <Hero/>
      <Profile/>
    </div>
  );
}

export default HomePage;
