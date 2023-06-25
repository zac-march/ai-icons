import React, { FC, useEffect, useState } from "react";
import style from "./Icons.module.css";
import IconGrid from "../../components/IconGrid/IconGrid";

interface TypeProps {}

interface Icon {
  timeCreated: number;
  url: string;
}

const Icons: FC<TypeProps> = (props) => {
  const [icons, setIcons] = useState<Icon[]>();
  const [count, setCount] = useState<number>();

  useEffect(() => {
    const tempIcons = JSON.parse(localStorage.getItem("icons"));
    if (Array.isArray(tempIcons)) {
      setIcons(tempIcons);
      setCount(tempIcons.length);
    }
  }, []);

  return (
    <section className={style.container}>
      {icons && count && <IconGrid icons={icons} count={count} />}
    </section>
  );
};

export default Icons;
