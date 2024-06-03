import React from 'react';

const Author = ({ name, role, place, avatarUrl }) => {
  return (
    <div className="flex items-center bg-white shadow-md rounded-md p-4 mb-4">
      <img src={avatarUrl} alt={name} className="w-16 h-16 rounded-full mr-4" />
      <div>
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-600">{role}</p>
        <p className="text-gray-600">{place}</p>
      </div>
    </div>
  );
};

export default Author;