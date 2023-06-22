import React from "react";
import style from "./Landing.module.css";
import LinkBtn from "../../components/LinkBtn/LinkBtn";

function Landing() {
  return (
    <section className={style.container}>
      <h1>Create a unique, professional icon for your application</h1>
      <p>
        Kickstart your brand with business card designs, social media graphics,
        app icons, letter heads and more
      </p>
      <LinkBtn title={"Create my icon"} route={"./generate"} />
    </section>
  );
}

export default Landing;
