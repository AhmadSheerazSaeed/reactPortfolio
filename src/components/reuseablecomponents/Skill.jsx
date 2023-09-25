import React from "react";
import skillCSS from "./skill.module.css";

const Skill = ({ skill, i }) => {
  return <button className={skillCSS.singleComputerSkill}>{skill}</button>;
};

export default Skill;
