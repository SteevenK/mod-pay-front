import React from "react";
import { UseFormRegister } from "react-hook-form";
import * as Style from "./styledComponent";

interface InputBoxProps {
  registerType: string;
  placeholder: string;
  register: UseFormRegister<any>;
  error: boolean;
}
export default function InputBoxSmall({
  registerType,
  placeholder,
  register,
  error,
}: InputBoxProps) {
  return (
    <Style.InputBoxSmall
      error={error}
      type="text"
      autoComplete="none"
      placeholder={placeholder}
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...register(registerType)}
    />
  );
}
