import React, { FC } from "react";
import style from "./Link.module.css";

interface TypeProps {}

const Link: FC<TypeProps> = (props) => {
  return <div className={style.container}></div>;
};

export default Link;
