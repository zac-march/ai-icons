import React, { FC, useEffect, useState } from "react";
import style from "./IconGrid.module.css";
import uniqid from "uniqid";
import { removeStoredIcon } from "../../util/storedIcons";

interface Icons {
  timeCreated: number;
  url: string;
}

interface TypeProps {
  icons: Icons[];
  count: number;
}

const IconGrid: FC<TypeProps> = (props) => {
  const { icons } = props;

  function iconLoad(element) {
    requestAnimationFrame(startIconLoad);

    function startIconLoad() {
      requestAnimationFrame(endIconLoad);
    }

    function endIconLoad() {
      element.classList.add(style.loaded);
    }
  }

  function hideDeadIcon(index, deadIcon) {
    removeStoredIcon(deadIcon);
    const icon: any = document.querySelector(`[data-icon="${index}"]`);
    icon.style.display = "none";
  }

  return (
    <div className={style.container}>
      {icons.map((icon, index) => (
        <div className={style.icon} key={index} data-icon={index}>
          <img
            src={icon.url}
            alt={`Icon ${index}`}
            onLoad={(e: any) => iconLoad(e.target)}
            onError={() => hideDeadIcon(index, icon)}
          />
          <div className={style.skeleton} key={uniqid()}></div>
        </div>
      ))}
    </div>
  );
};

export default IconGrid;
