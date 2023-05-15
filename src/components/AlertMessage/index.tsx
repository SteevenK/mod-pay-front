import React from "react";
import * as Style from "./styledComponent";

interface AlertMessageProps {
  inputError: any;
}

export default function AlertMessage(props: AlertMessageProps) {
  const { inputError } = props;

  return <Style.AlertMessage>{inputError?.message}</Style.AlertMessage>;
}
