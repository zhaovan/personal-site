import NavBar from "../components/navbar";
import shared from "../styles/Shared.module.css";
import Footer from "../components/footer";
import Header from "../components/header";
import styles from "../styles/Projects.module.css";
import projects from "../data/projects";

export default function Projects() {
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

        <div className={styles.projectContainer}>
          {projects.map((project, i) => {
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
                      tag == "product"
                        ? styles.product
                        : tag == "design"
                        ? styles.design
                        : tag == "research"
                        ? styles.research
                        : tag == "classwork"
                        ? styles.classwork
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
