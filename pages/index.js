import styles from "../styles/Home.module.css";

import shared from "../styles/Shared.module.css";

export default function Home() {
  return (
    <div className={shared.page}>
      <div className={[shared.container, styles.container].join(" ")}>
        <div
          data-aos="fade-up"
          data-aos-duration="750"
          data-aos-delay="50"
          className={styles.textBoxWrapper}
        >
          <p className={styles.title}>
            Hey there,<span style={{ fontFamily: "Brittany" }}> I'm Ivan!</span>
          </p>
          <div className={styles.textBox}>
            <p>
              Welcome to my tiny corner of the internet where I'm probably
              tinkering with random software and tools, climbing up walls or
              buildings, or eating my way through a city.
            </p>
          </div>
        </div>
        <div
          className={styles.tabletDiv}
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="50"
        >
          <img
            src={"/media/home.gif"}
            alt="cabin with smoke coming out animated in pixelated form in four frames. the cabin is a light gray color with a dark red roof."
            className={styles.photo}
          />
        </div>
      </div>
    </div>
  );
}
