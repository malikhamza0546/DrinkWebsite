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
}) {
  return (
    // <div className="input">
    <div className={`${error ? "isError" : ""} input`}>
      {/* <label className="labelText">
        {label}
        {required && <sup>*</sup>}
      </label> */}
      <input
        className="inputField"
        type={type}
        {...register(name, validation)}
        placeholder={placeholder}
      />
      {error && <p className="errorMessage">{errorMessage}</p>}
    </div>
    // </div>
  );
}
