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
      <div className={style.blurb}>
        <h1>Your icons</h1>
        <p>
          Icons are hosted for only 15 minutes, so download your favorites
          before they vanish!
        </p>
      </div>
      {icons && count && <IconGrid icons={icons} count={count} />}
    </section>
  );
};

export default Icons;
