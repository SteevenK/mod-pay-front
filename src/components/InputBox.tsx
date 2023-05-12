import React from "react";
import { UseFormRegister } from "react-hook-form";

interface InputBoxProps {
  title: string;
  registerType: string;
  placeholder: string;
  register: UseFormRegister<any>;
}
export default function InputBox(props: InputBoxProps) {
  const title = props.title;
  const registerType = props.registerType;
  const placeholder = props.placeholder;
  const register = props.register;

  return (
    <div className="form-group">
      <p className="boxtitle">{title} :</p>
      <input
        className="inputboxLong"
        type="text"
        autoComplete="none"
        placeholder={placeholder}
        {...register(registerType)}
      />
    </div>
  );
}
