import React from "react";
import { UseFormRegister } from "react-hook-form";

interface InputBoxProps {
  title: string;
  registerType: string;
  placeholder: string;
  register: UseFormRegister<any>;
}
export default function InputBox(props: InputBoxProps) {
  const { title } = props;
  const { registerType } = props;
  const { placeholder } = props;
  const { register } = props;

  return (
    <div className="form-group">
      <p className="boxtitle">{title} :</p>
      <input
        className="inputboxLong"
        type="text"
        autoComplete="none"
        placeholder={placeholder}
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        {...register(registerType)}
      />
    </div>
  );
}
