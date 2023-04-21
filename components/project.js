import React, { useEffect } from "react";
import styles from "../styles/Projects.module.css";
import Image from "next/image";

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

export default function Project({ project, gradient, colors }) {
  return (
    <div className={styles.project} data-aos="fade-up">
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
      {/* {project.thumbnail && (
          <div className={styles.imageWrapper}>
            <Image src={project.thumbnail} width={400} height={300} />
          </div>
        )} */}

      <div className={styles.projectText}>
        <div className={styles.name}>
          <a
            href={project.website}
            className={styles.projectLink}
            target="_blank"
          >
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
              <span className={[currStyle, styles.resumeTag].join(" ")}>
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
