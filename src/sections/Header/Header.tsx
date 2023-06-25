import style from "./Header.module.css";

function Nav() {
  return (
    <header className={style.container}>
      <nav className={style.nav}>
        <label className={style.logo}>
          <a href="#/">AIcons</a>
        </label>
        <input type="checkbox" id={style["menuToggle"]} />
        <label htmlFor={style["menuToggle"]} className={style.menuBtn}>
          <span></span>
          <span></span>
          <span></span>
        </label>
        <ul>
          <li>
            <a href="#/generate">Generate</a>
          </li>
          <li>
            <a href="#/icons">Icons</a>
          </li>
          <li>
            <a className={style.disabledLink}>Sign In</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
