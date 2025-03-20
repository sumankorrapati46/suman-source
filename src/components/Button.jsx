import React from 'react';

const Button = ({ label, onClick, type = "button", className = "" }) => {
  return (
    <button className={`px-4 py-2 bg-blue-500 text-white rounded ${className}`} onClick={onClick} type={type}>
      {label}
    </button>
  );
};

export default Button;
