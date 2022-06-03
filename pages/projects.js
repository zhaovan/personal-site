import NavBar from "../components/navbar";
import shared from "../styles/Shared.module.css";
import Footer from "../components/footer";
import Header from "../components/header";
import styles from "../styles/Projects.module.css";
import projects from "../data/projects";
import { useState, useEffect } from "react";

const filters = ["design", "development", "diversity", "research"];

export default function Projects() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [projectList, setProjects] = useState(projects);
  console.log(projectList);
  console.log(selectedFilters);

  function filterProjects() {
    if (selectedFilters.length === 0) {
      setProjects(projects);
      return;
    }
    var newProjectList = [];
    for (const project of projects) {
      const found = project.tags.some((r) => selectedFilters.includes(r));
      if (found) {
        newProjectList.push(project);
      }
    }

    setProjects(newProjectList);
  }

  return (
    <div className={shared.page}>
      <Header title={"Projects"} />
      <NavBar currPage="projects" />

      <p className={shared.titleText}>Projects!</p>
      <div className={shared.container} style={{ flexDirection: "column" }}>
        <p className={shared.firstText}>
          I sometimes work on things. Here's a couple of them that (sort of)
          turned out.
        </p>
        <p className={styles.filterContainer}>
          {/* Filter: */}
          {filters.map((filter, i) => {
            console.log(filter);
            const currStyle =
              filter == "design"
                ? styles.design
                : filter == "research"
                ? styles.research
                : filter == "diversity"
                ? styles.diversity
                : styles.dev;

            const clicked = selectedFilters.includes(filter);
            return (
              <p
                className={[
                  currStyle,
                  styles.resumeTag,
                  styles.clickable,
                  clicked ? styles.clicked : "",
                ].join(" ")}
                onClick={() => {
                  if (!selectedFilters.includes(filter)) {
                    var newFilters = selectedFilters;
                    newFilters.push(filter);
                    console.log(newFilters);
                    setSelectedFilters(newFilters);
                  } else {
                    const index = selectedFilters.indexOf(filter);
                    var newFilters = selectedFilters;
                    newFilters.splice(index, 1);
                    setSelectedFilters(newFilters);
                  }
                  filterProjects();
                }}
              >
                {filter}
              </p>
            );
          })}
        </p>
        <div className={styles.projectContainer}>
          {projectList.map((project, i) => {
            return (
              <div className={styles.project} data-aos="fade-up" key={i}>
                <div className={styles.name}>
                  <a href={project.website} target="_blank">
                    {project.name}
                  </a>
                </div>
                <div style={{ marginBottom: "3%" }}>
                  {project.tags.map((tag) => {
                    const currStyle =
                      tag == "design"
                        ? styles.design
                        : tag == "research"
                        ? styles.research
                        : tag == "diversity"
                        ? styles.diversity
                        : styles.dev;
                    return (
                      <div className={[currStyle, styles.resumeTag].join(" ")}>
                        {tag}
                      </div>
                    );
                  })}
                </div>

                <div>
                  <p className={styles.description}>{project.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}
