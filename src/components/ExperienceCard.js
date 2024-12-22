import React from "react";

const ExperienceCard = ({ company, role, description, iconSrc, iconAlt }) => (
  <div className="w-full mb-4 rounded-lg border-solid border-2 border-slate-950">
    <div className="p-6 flex content-center space-x-4">
      <div className="flex justify-center items-center">
        <img src={iconSrc} alt={iconAlt} className="w-10 h-10 align-middle" />
      </div>
      <div className="flex flex-col">
        <h1 className="text-lg">{company}</h1>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
  </div>
);

export default ExperienceCard;
