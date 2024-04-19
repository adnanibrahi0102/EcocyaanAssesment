import React from 'react';

const Card = ({ name, role, description, imgSrc }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={imgSrc}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-sm text-gray-600 mb-4">{role}</p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
