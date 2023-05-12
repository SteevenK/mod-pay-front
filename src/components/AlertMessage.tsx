import React from "react";

interface AlertMessageProps {
  inputError: any;
}

export default function AlertMessage(props: AlertMessageProps) {
  const { inputError } = props;

  return <p className="alert">{inputError?.message}</p>;
}
