import React from "react";

function Random() {
  return (
    <div className="flex flex-col justify-center max-w-6xl mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-2xl italic font-bold">Random</h1>
      </div>
      <div className="text-center">
        {/* Links */}
        <p>
          <a href="https://goodreads.com/rachelsle" className="text-blue-600">
            My Goodreads profile
          </a>
        </p>
      </div>
    </div>
  );
}

export default Random;
