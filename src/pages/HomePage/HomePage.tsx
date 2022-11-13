import React from "react";
import Drawer from "./Drawer";
import Navbar from "./Navbar";

function HomePage() {
  return (
    <div className="pl-3 pr-3">
      <Navbar />
      <Drawer />
    </div>
  );
}

export default HomePage;
