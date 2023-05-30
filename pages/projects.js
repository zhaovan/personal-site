import { useState } from "react";
import shared from "../styles/Shared.module.css";
import styles from "../styles/Projects.module.css";

import projects from "../data/projects.json";

import Project from "../components/project";

const filters = [
  "featured",
  "3d modeling",
  "graphic design",
  "ui/ux",
  "development",
  "diversity",
];

const tagToColors = {
  featured: "#ffc0cb",
  "3d modeling": "#9ad1d4",
  "ui/ux": "#BADEFC",
  diversity: "#ffd700",
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

  function handleFilterClick(filter) {
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
  }

  return (
    <div className={shared.page}>
      <p className={shared.firstText}>
        A collection of personal and passion projects
      </p>
      <div className={shared.container} style={{ flexDirection: "column" }}>
        <div className={styles.filterContainer}>
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
                onClick={() => handleFilterClick(filter)}
              >
                {filter}
              </p>
            );
          })}
        </div>
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
              <Project
                key={i}
                project={project}
                gradient={gradient}
                colors={colors}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
