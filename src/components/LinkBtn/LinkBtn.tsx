import React, { FC } from "react";
import style from "./LinkBtn.module.css";

interface LinkProps {
  title: string;
  route: string;
}

const LinkBtn: FC<LinkProps> = (props) => {
  const { title, route } = props;

  return (
    <a href={route} className={style.link}>
      {title}
    </a>
  );
};

export default LinkBtn;
