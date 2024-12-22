import React from "react";

// TODO: Add pictures

const ProjectCard = ({
  title,
  date,
  description,
  //   image,
  //   imageRight = false,
}) => (
  <div className="mb-12">
    {/* <div
      className={`flex flex-col lg:flex-row ${
        imageRight ? "lg:flex-row-reverse" : ""
      }`}
    > */}
    <div className="lg:w-1/2">
      <h3 className="text-lg italic mb-3">{title}</h3>
      <h4 className="text-sm font-sans mb-2">{date}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
    {/* <div className="lg:w-1/2 text-center">
        <img src={image} className="w-72 m-auto block" />
      </div> */}
  </div>
  //   </div>
);

export default ProjectCard;
