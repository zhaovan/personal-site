import React from "react";
import Header from "../components/header";
import NavBar from "../components/navbar";
import Image from "next/image";
import Link from "next/link";

import shared from "../styles/Shared.module.css";
import styles from "../styles/Explorations.module.css";
import explorations from "../data/explorations";

export default function Explorations() {
  return (
    <div>
      <Header title={"Explorations"} />
      <NavBar currPage={"explorations"} />

      <h1 className={shared.titleText}>Explorations!</h1>
      <p className={shared.firstText}>WIP / sketches / doodles</p>
      <div
        className={shared.container}
        style={{ flexWrap: "wrap", justifyContent: "space-between" }}
      >
        {explorations.map((size) => {
          const item = size[Object.keys(size)[0]];
          const sizeName = Object.keys(size)[0];

          return (
            <div className={styles.drawingContainer}>
              {item.map((drawing) => {
                const height = sizeName === "small" ? 250 : 450;
                const ratio = drawing.aspectRatio ? drawing.aspectRatio : 1;
                const width = height * ratio;

                return (
                  <span className={styles.image}>
                    <Image
                      src={drawing.path}
                      width={width}
                      height={height}
                      loading="lazy"
                    />
                    <div>
                      <p>{drawing.title}</p>
                    </div>
                  </span>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
