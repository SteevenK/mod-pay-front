import React from "react";
import * as Style from "./styledComponent";

interface BoxTitleProps {
  title: any;
}
export default function BoxTitle(props: BoxTitleProps) {
  const { title } = props;
  return <Style.BoxTitle>{title} :</Style.BoxTitle>;
}
