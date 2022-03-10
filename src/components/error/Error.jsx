import React from "react";
import errorStyle from "./Error.module.css";

function Error({ message }) {
  return (
    <>{message ? <div className={errorStyle.break}>{message}</div> : null}</>
  );
}

export default Error;
