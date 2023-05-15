import React from "react";
import { UseFormRegister } from "react-hook-form";
import * as Style from "./styledComponent";

interface InputBoxProps {
  registerType: string;
  placeholder: string;
  register: UseFormRegister<any>;
}
export default function InputBoxSmall(props: InputBoxProps) {
  const { registerType } = props;
  const { placeholder } = props;
  const { register } = props;

  return (
    <Style.InputBoxSmall
      type="text"
      autoComplete="none"
      placeholder={placeholder}
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...register(registerType)}
    />
  );
}
