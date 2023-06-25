import React from "react";
import style from "./Landing.module.css";
import LinkBtn from "../../components/LinkBtn/LinkBtn";

function Landing() {
  return (
    <section className={style.container}>
      <h1>Create a unique, professional icon for your application</h1>
      <p>
        Say goodbye to the hassle of manual design and exorbitant costs — create
        personalized icons tailored to your preferences in an instant.
      </p>
      <LinkBtn title={"Create my icon"} route={"./generate"} />
    </section>
  );
}

export default Landing;
