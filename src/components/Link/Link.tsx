import React, { FC } from "react";
import style from "./Link.module.css";

interface LinkProps {
  title: string;
  callback: any;
}

const Link: FC<LinkProps> = (props) => {
  const { title, callback } = props;

  return (
    <button onClick={callback} className={style.link}>
      {title}
    </button>
  );
};

export default Link;
