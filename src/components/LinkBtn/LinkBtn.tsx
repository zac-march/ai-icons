import React, { FC } from "react";
import style from "./LinkBtn.module.css";

interface LinkProps {
  title: string;
  callback: any;
}

const LinkBtn: FC<LinkProps> = (props) => {
  const { title, callback } = props;

  return (
    <a href={"./generate"} onClick={callback} className={style.link}>
      {title}
    </a>
  );
};

export default LinkBtn;
