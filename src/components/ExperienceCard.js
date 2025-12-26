import React from "react";

const ExperienceCard = ({
  company,
  role,
  description,
  iconSrc,
  iconAlt,
  link,
  linkText,
}) => (
  <div className="w-full">
    <div className="p-6 flex content-center space-x-4">
      <div className="flex justify-center items-center">
        <img src={iconSrc} alt={iconAlt} className="w-10 h-10 align-middle" />
      </div>
      <div className="flex flex-col">
        <h1 className="text-lg">{company}</h1>
        <p className="text-sm text-gray-600">{role}</p>
        {description && (
          <p className="pt-2 text-xs italic text-gray-600">{description}</p>
        )}
        {link && (
          <a
            href={link}
            className="pt-2 text-xs italic text-blue-600"
            target="_blank"
          >
            {linkText}
          </a>
        )}
      </div>
    </div>
  </div>
);

export default ExperienceCard;
