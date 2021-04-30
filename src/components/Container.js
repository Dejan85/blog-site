import React from "react";
import { ContainerWrapper } from "../elements";

export const Container = props => {
  const { children } = props;

  return <ContainerWrapper>{children}</ContainerWrapper>;
};
