import React from "react";
import singleProjectCSS from "./singleProject.module.css";

const SingleProject = ({ project }) => {
  const technologiesUsed = project.technologiesUsed;
  // console.log(technologiesUsed);
  return (
    <div className={singleProjectCSS.projectWrapper}>
      <h3 className={singleProjectCSS.projectName}>{project.name}</h3>
      <div className={singleProjectCSS.imageWrapper}>
        <img src={project.imageUrl} />
      </div>
      <p className={singleProjectCSS.detailText}>{project.detail}</p>

      <div className={singleProjectCSS.demoGithubWrapper}>
        <a href={project.link} target="_blank" rel="noreferrer">
          <button>Demo</button>
        </a>
        <a href={project.github} target="_blank" rel="noreferrer">
          <button>Github</button>
        </a>
      </div>

      {technologiesUsed.length > 0 && (
        <h2 className={singleProjectCSS.technologiesUsed}>Technologies used</h2>
      )}
      <div className={singleProjectCSS.technologyWrapper}>
        {technologiesUsed ? (
          technologiesUsed.map((technology, i) => (
            <button key={i}>{technology}</button>
          ))
        ) : (
          <button>No technologies mentioned</button>
        )}
      </div>
    </div>
  );
};

export default SingleProject;
