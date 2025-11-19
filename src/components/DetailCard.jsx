import React from 'react';

const DetailCard = ({ title, value, className = "" }) => (
  <div className={`p-4 bg-white rounded-xl shadow-sm border border-gray-100 ${className}`}>
    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">{title}</p>
    <p className="text-lg font-bold text-gray-900 mt-1">{value}</p>
  </div>
);

export default DetailCard;