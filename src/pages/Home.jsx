import React, { useState } from "react";
import SocialMediaLinks from "../components/SocialMediaLinks";
import Me from "../assets/me.JPG";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import SnakeGame from "../components/SnakeGame";
import Collapsible from "../components/Collapsible";

const Home = () => {
  const boxStyle = {
    borderRadius: 1,
    bgcolor: "white",
  };

  return (
    <div className="w-screen h-screen mx-auto px-4 py-8 flex justify-center">
      <div className="p-6 w-fit h-fit flex items-center lg:w-3/4 xl:w-1/2 justify-center md:space-x-6">
        {/* My picture */}
        <div className="hidden md:block">
          {/* <img src={Me} className="w-80" alt="Me" /> */}
          <Collapsible label="Play snake 🐍">
            <SnakeGame width={200} height={200} />
          </Collapsible>
        </div>
        {/* Words */}
        <div className="w-1/3">
          <h1 className="text-xl font-semibold mb-2">Hi, I'm Rachel</h1>
          <p className="text-lg">
            welcome to my website!
            <br />
          </p>
          <SocialMediaLinks size="medium" />
        </div>
      </div>
    </div>
  );
};

export default Home;
