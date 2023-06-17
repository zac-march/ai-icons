import React from "react";
import style from "./Nav.module.css";

function Nav() {
  return (
    <nav className={style.container}>
      <div>
        <h1>
          <a href="./">AIcons</a>
        </h1>
      </div>
      <ul className={style.navItems}>
        <li>
          <a href="./generate">Generate</a>
        </li>
        <li>
          <a href="#">Icons</a>
        </li>
        <li>
          <a href="#">Sign In</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
