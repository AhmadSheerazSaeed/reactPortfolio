import projectCSS from "./projects.module.css";
import allProjects from "./allProjects";
import SingleProject from "../reuseablecomponents/SingleProject";

const Projects = () => {
  // console.log(allProjects[0].imageUrl);
  return (
    <div className={projectCSS.projectWrapper}>
      <aside className={projectCSS.leftSide}></aside>
      <aside className={projectCSS.rightSide}>
        <h1 className={projectCSS.headingMain}>Projects</h1>
        {/* Projects cards */}
        <div>
          {allProjects.map((project, i) => {
            // console.log(project);
            return <SingleProject key={i} project={project} />;
          })}
        </div>
      </aside>
    </div>
  );
};

export default Projects;
