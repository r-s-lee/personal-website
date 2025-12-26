import React, { useState } from "react";
import SocialMediaLinks from "../components/SocialMediaLinks";
import Me from "../assets/me.JPG";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const Home = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const boxStyle = {
    borderRadius: 1,
    bgcolor: "white",
  };

  const tldr =
    "I'm currently working in NYC as a software engineer at Confido, a YC-backed start-up making AI automations for CPG brands. I recently graduated with a joint BS/MS in math & CS from UChicago. i like to work on cool projects, be adventurous, & ponder.";

  return (
    <div className="w-screen h-screen mx-auto px-4 py-8 flex justify-center">
      <div className="p-6 w-fit h-fit flex items-center lg:w-3/4 xl:w-1/2 justify-center md:space-x-6 border-solid border border-slate-950 rounded-lg">
        {/* My picture */}
        <div className="hidden md:block">
          <img src={Me} className="w-80" alt="Me" />
        </div>
        {/* Words */}
        <div className="w-full h-full md:w-1/2">
          <h1 className="text-2xl font-semibold mb-2">Hi, I'm Rachel</h1>
          <p className="my-2 text-xl">
            welcome to my website!
            <br />
          </p>
          <p className="text-blue-600 text-md hidden lg:block">
            <b>tl;dr</b> {tldr}
          </p>
          <p className="text-blue-600 text-md block lg:hidden">
            <button type="button" onClick={toggleModal}>
              <b>tl;dr</b>
            </button>
          </p>
          <SocialMediaLinks />
        </div>
      </div>
      <Modal
        open={modal}
        onClose={toggleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxStyle} className="absolute top-1/4 left-1/4 w-1/2 h-fit">
          <p className="m-5 text-base md:text-md text-blue-600">
            <b>tl;dr</b> {tldr}
          </p>
        </Box>
      </Modal>
    </div>
  );
};

export default Home;
