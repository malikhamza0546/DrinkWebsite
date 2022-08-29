import React from "react";
import { useForm } from "react-hook-form";
import "./Input.css";

export default function Input({
  label,
  placeholder,
  required,
  type,
  register,
  validation,
  name,
  error,
  errorMessage,
  className,
  value,
  onChange,
}) {
  return (
    // <div className="input">
    <div className={`${error ? "isError" : ""} input`}>
      {/* <label className="labelText">
        {label}
        {required && <sup>*</sup>}
      </label> */}
      <input
        // className="inputField"
        className={`${className} shadow w-full appearance-none border border-borderGrey rounded py-2 px-3 text-black font-roboto leading-tight focus:outline-none focus:shadow-outline`}
        type={type}
        {...register(name, validation)}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <p className="errorMessage">{errorMessage}</p>}
    </div>
    // </div>
  );
}
