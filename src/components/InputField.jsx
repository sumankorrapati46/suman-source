import React from "react";

const InputField = ({ label, type, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-600">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded"
      />
    </div>
  );
};

export default InputField;
