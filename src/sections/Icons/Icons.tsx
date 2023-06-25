import React, { FC, useEffect, useState } from "react";
import style from "./Icons.module.css";
import IconGrid from "../../components/IconGrid/IconGrid";
import { getStoredIcons } from "../../util/storedIcons";

interface TypeProps {}

interface Icon {
  timeCreated: number;
  url: string;
}

const Icons: FC<TypeProps> = (props) => {
  const [icons, setIcons] = useState<Icon[]>();

  useEffect(() => {
    const tempIcons = getStoredIcons();
    if (Array.isArray(tempIcons)) {
      setIcons(tempIcons);
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
      <IconGrid icons={icons} />
    </section>
  );
};

export default Icons;
