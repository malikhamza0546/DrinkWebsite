import React from "react";

const SaveButton = ({ label, icon }) => {
  return (
    <button
      style={{ fontSize: 13, height: 45 , border:"2px solid black"}}
      className="flex bg-white  w-full text-whiteColor font-bold py-2 px-4 rounded items-center"
    >
      {icon && icon}
      <span className="text-center m-auto text-black">{label}</span>
    </button>
  );
};

export default SaveButton;
