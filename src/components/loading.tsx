import React, { Fragment } from "react";
import Loader from "./loader";

const Loading: React.FC<{ loading: boolean }> = ({ children, loading }) => {
  if (loading) {
    return <Loader />;
  }
  return <Fragment>{children}</Fragment>;
};

export default Loading;
