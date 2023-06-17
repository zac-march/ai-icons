import React from "react";
import style from "./Nav.module.css";

function Nav() {
  return (
    <nav className={style.container}>
      <div>
        <h1>AIcons</h1>
      </div>
      <ul className={style.navItems}>
        <li>
          <a href="#">Generate</a>
        </li>
        <li>
          <a href="#">Option</a>
        </li>
        <li>
          <a href="#">Option</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
