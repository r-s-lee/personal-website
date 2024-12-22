import React from "react";
import SocialMediaLinks from "../components/SocialMediaLinks";
import Me from "../assets/me.JPG";

const Home = () => {
  return (
    <div className="max-w-full mx-auto px-4 py-8 flex justify-center">
      <div className="w-1/2 h-3/4 rounded-lg border-solid border-2 border-slate-950">
        <div className="p-8 flex items-center space-x-6">
          {/* My picture */}
          <div className="p-3 rounded-lg">
            <img src={Me} className="w-96" alt="Me" />
          </div>
          {/* Words */}
          <div className="w-1/2">
            <div className="h-1/2">
              <h1 className="text-2xl font-semibold mb-2">Hi, I'm Rachel</h1>
              <p className="my-2">
                welcome to my website!
                <br />
              </p>
              <p className="text-blue-600">
                <b>tl;dr</b> I'm a bs/ms student at uchicago studying math & CS.
                i like to work on cool projects, be adventurous, & ponder.
              </p>
            </div>
            <div className="h-1/4 flex place-items-end">
              <SocialMediaLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
