import React from "react";

interface AlertMessageProps {
  inputError: any;
}

export default function AlertMessage(props: AlertMessageProps) {
  const inputError = props.inputError;

  return <p className="alert">{inputError?.message}</p>;
}
