import React from "react";

const TextField = ({ type, placeholder, name, className }) => {
  return (
    <input
      className={`${className} shadow w-full appearance-none border border-borderGrey rounded py-2 px-3 text-black font-roboto leading-tight focus:outline-none focus:shadow-outline`}
      name={name}
      type={type}
      placeholder={placeholder}
    ></input>
  );
};

export default TextField;
