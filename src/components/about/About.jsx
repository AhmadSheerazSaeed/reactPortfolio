import React from "react";
import aboutCSS from "./about.module.css";
import skills from "./skills";
import languages from "./languages";
import softSkills from "./softSkills";

import Skill from "../reuseablecomponents/Skill";

const About = () => {
  return (
    <div className={aboutCSS.aboutWrapper}>
      <aside className={aboutCSS.leftSide}></aside>
      <aside className={aboutCSS.rightSide}>
        <h1 className={aboutCSS.mainHeading}>About Me</h1>

        <section>
          <p className={aboutCSS.detail}>
            I am passionate about utilizing my coding skills to create dynamic
            and user-friendly websites that enhance the user experience and
            drive commercial success. With a solid background in data management
            and a keen eye for detail gained from my experience in finance,
            accounting and software development, I am well- equipped to deliver
            exceptional results. Now, I am excited to embark on new web
            development challenges that allow me to combine my technical
            expertise with creative problem solving.
          </p>
        </section>

        <section>
          <h2 className={aboutCSS.subHeading}>Skills</h2>
        </section>

        {/* computer language and libraries skills */}
        <h3 className={aboutCSS.skillSubHeading}>
          Programming Languages and Libraries
        </h3>

        <section className={aboutCSS.allSkills}>
          {skills.map((skill, i) => {
            return <Skill skill={skill} i={i} key={i} />;
          })}
        </section>

        {/* spoken languages skills */}
        <h3 className={aboutCSS.skillSubHeading}>Spoken languages</h3>

        <section className={aboutCSS.allSkills}>
          {languages.map((skill, i) => {
            return <Skill skill={skill} i={i} key={i} />;
          })}
        </section>

        {/* spoken languages skills */}
        <h3 className={aboutCSS.skillSubHeading}>Soft skills</h3>

        <section className={aboutCSS.allSkills}>
          {softSkills.map((skill, i) => {
            return <Skill skill={skill} i={i} key={i} />;
          })}
        </section>
      </aside>
    </div>
  );
};

export default About;
