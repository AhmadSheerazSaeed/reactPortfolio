import React from "react";
import homeCSS from "./home.module.css";
import animatedImage from "../../assets/animatedImages/programmerWorking.gif";

const Home = () => {
  return (
    <div className={homeCSS.homeWrapper}>
      <section className={homeCSS.hiSection}>
        <h1>Hi,</h1>
      </section>

      <section className={homeCSS.imageOfProgrammer}>
        <img
          src={animatedImage}
          alt="Animated image of a computer programmer"
        />
      </section>

      <section className={homeCSS.nameSection}>
        <h1>I am&nbsp;</h1>
        <h1>Ahmad</h1>
        <h1>
          <span>&nbsp;Sheeraz</span>
        </h1>
        <h1>&nbsp;Saeed,</h1>
      </section>

      <section className={homeCSS.passionateDeveloperSection}>
        <h1>a</h1>
        <h1>
          <span>&nbsp;passionate&nbsp;</span>
        </h1>
        <h1>Web</h1>
        <h1>&nbsp;developer</h1>
      </section>
    </div>
  );
};

export default Home;
