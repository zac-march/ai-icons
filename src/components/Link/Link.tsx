import React, { FC } from "react";
import style from "./Link.module.css";

interface LinkProps {
  title: string;
  callback: any;
}

const Link: FC<LinkProps> = (props) => {
  const { title, callback } = props;

  return (
    <a onClick={callback} className={style.link}>
      {title}
    </a>
  );
};

export default Link;
