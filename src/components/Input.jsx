import React from "react";

const Input = ({ label, type, name, value, onChange, placeholder }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-base font-medium text-gray-900"
      >
        {label}
      </label>
      <div className="relative mt-2.5 text-gray-400 focus-within:text-gray-600">
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="block w-full rounded-md border border-gray-200 bg-gray-50 py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 focus:border-blue-600 focus:bg-white focus:outline-none"
        />
      </div>
    </div>
  );
};

export default Input;
