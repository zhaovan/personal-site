import NavBar from "../components/navbar";
import shared from "../styles/Shared.module.css";
import Footer from "../components/footer";
import Header from "../components/header";
import styles from "../styles/Projects.module.css";
import projects from "../data/projects";
import { useState, useEffect } from "react";

const filters = [
  "featured",
  "3d modeling",
  "graphic design",
  "ui/ux",
  "development",
  "diversity",
  "research",
];

const tagToColors = {
  featured: "#ffc0cb",
  "3d modeling": "#9ad1d4",
  "ui/ux": "#BADEFC",
  diversity: "#ffd700",
  research: "#DDA0DD",
  development: "#eaeaea",
  "graphic design": "#F08080",
};

function setProjectStyle(tag) {
  const currStyle =
    tag == "ui/ux"
      ? styles.uiux
      : tag == "research"
      ? styles.research
      : tag == "diversity"
      ? styles.diversity
      : tag == "3d modeling"
      ? styles.modeling
      : tag == "graphic design"
      ? styles.graphicDesign
      : tag == "featured"
      ? styles.featured
      : styles.dev;
  return currStyle;
}

export default function Projects() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [projectList, setProjects] = useState(projects);

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

      <h1 className={shared.titleText}>Projects!</h1>
      <div className={shared.container} style={{ flexDirection: "column" }}>
        <p className={shared.firstText}>
          I sometimes work on things. Here's a couple of them that (sort of)
          turned out.
        </p>
        <p className={styles.filterContainer}>
          {/* Filter: */}
          {filters.map((filter, i) => {
            const currStyle = setProjectStyle(filter);
            const clicked = selectedFilters.includes(filter);
            return (
              <p
                key={i}
                className={[
                  currStyle,
                  styles.resumeTag,
                  styles.clickable,
                  clicked ? styles.clicked : "",
                ].join(" ")}
                onClick={() => {
                  // Checks if the filter is already in the list
                  // if not, adds it to the state array
                  if (!selectedFilters.includes(filter)) {
                    var newFilters = selectedFilters;
                    newFilters.push(filter);
                    setSelectedFilters(newFilters);
                  } else {
                    // else, removes it from the array by splicing
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
            const colors = [];

            for (const tag of project.tags) {
              colors.push(tagToColors[tag]);
            }
            const colorString = colors.join(",");

            const gradient =
              colors.length > 1
                ? "linear-gradient(45deg," + colorString + ")"
                : colorString;

            return (
              <div className={styles.project} data-aos="fade-up" key={i}>
                {colors.length > 1 ? (
                  <div
                    className={styles.projectHeaderGraphic}
                    style={{
                      background: gradient,
                    }}
                  />
                ) : (
                  <div
                    className={styles.projectHeaderGraphic}
                    style={{
                      backgroundColor: gradient,
                    }}
                  />
                )}

                <div className={styles.projectText}>
                  <div className={styles.name}>
                    <a href={project.website} target="_blank">
                      {project.name}
                    </a>
                  </div>
                  <div>
                    <p className={styles.description}>{project.description}</p>
                  </div>
                  <div>
                    {project.tags.map((tag) => {
                      const currStyle = setProjectStyle(tag);
                      return (
                        <div
                          className={[currStyle, styles.resumeTag].join(" ")}
                        >
                          {tag}
                        </div>
                      );
                    })}
                  </div>
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
