import style from "./Landing.module.css";
import LinkBtn from "../../components/LinkBtn/LinkBtn";
import premadeIcons from "../../data/premadeIcons";

function Landing() {
  return (
    <section className={style.container}>
      <h1>Create unique, professional icons for your applications</h1>
      <p>
        Say goodbye to the hassle of manual design and exorbitant costs — create
        personalized icons tailored to your needs in an instant.
      </p>
      <LinkBtn title={"Create my icon"} route={"#/generate"} />
      <div className={style.iconGallery}>
        {premadeIcons.map((icon) => (
          <div>
            <img alt="" src={icon}></img>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Landing;
