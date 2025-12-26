import React from "react";

const EducationCard = ({
  title,
  date,
  description,
  notableCoursework,
  involvement,
}) => (
  <div className="w-full">
    <div className="flex flex-col">
      <h1 className="text-lg font-bold">{title}</h1>
      <p className="text-sm font-sans text-gray-600">{date}</p>
      {description && (
        <p className="pt-2 text-sm italic text-gray-600">{description}</p>
      )}
      {notableCoursework && (
        <p className="pt-2 text-sm text-gray-600">
          Notable Coursework: {notableCoursework}
        </p>
      )}
      {involvement && (
        <p className="pt-2 text-sm text-gray-600">Involvement: {involvement}</p>
      )}
    </div>
  </div>
);

export default EducationCard;
