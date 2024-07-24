import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/myPic.jpeg")}
        alt="hero image"
      />
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'am Surya</h1>
        <p className={styles.discription}>
          I'm a frontend developer with 3.7 years of experience in React.js.
        </p>
        <a
          className={styles.contactBtn}
          href="mailto:suryakantamaharana03@gmail.com"
        >
          Contact Me
        </a>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
