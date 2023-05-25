import styles from "../styles/About.module.css";
import shared from "../styles/Shared.module.css";

import Image from "next/image";
import Bio from "../data/bio.json";

import Link from "next/link";

export default function About() {
  return (
    <div className={shared.page}>
      <div className={[shared.container, styles.newContainer].join(" ")}>
        <div className={styles.photoWrapper} data-aos="fade-right">
          <Image
            src={"/media/about.jpg"}
            className={styles.photo}
            alt="This is a terrible photo of me but with cute cats"
            width={1000}
            height={400}
            priority={true}
          />
        </div>

        <div style={{ marginLeft: "4%" }}>
          <div data-aos="fade-left" data-duration="1000">
            <p className={styles.text}>
              I'm a dog lover from Seattle, WA, trying to fill this world with{" "}
              <b>
                baked goods, good vibes, fun drinks, meaningful words, and
                playful software.
              </b>
            </p>
            <p className={styles.text}>
              My creative and engineering practice revoles around tools,
              computational systems, and play. Specifically, I'm interested in
              the ways that computers and digital systems bring new affordances
              that allow us to push the boundaries of current human capability.
            </p>
            <p className={styles.text}>
              I fundamentally believe that to be human is to be creative, and
              that the key to understanding certain structures in the world is
              to have multidsciplinary interests. This idea manifests itself by
              being enrolled at{" "}
              <Link
                href="https://letterformarchive.org/type-west-online/"
                target="_blank"
              >
                Type West
              </Link>
              , a postgraduate type design program, and learning{" "}
              <Link
                href="https://withfriends.co/event/16016786/meet_the_participants_of_spring_2023"
                target="_blank"
              >
                Cellular Automata at SPFC.
              </Link>
            </p>
            <p className={styles.text}>
              I grew up in Philidelphia and Seattle, went to school in
              Providence, and now currently reside in San Francisco. If you
              happen to be in the area, feel free to reach out to me! I love to
              sit in coffee shops and talk about pastries ad naseum.
            </p>
          </div>
          <div>
            {Object.keys(Bio).map((bioKey, idx) => {
              return (
                <div data-aos="fade-left" data-duration="1000" key={idx}>
                  <h2>{bioKey}</h2>
                  {Bio[bioKey].map((item, secondIdx) => {
                    return (
                      <p className={styles.info} key={secondIdx}>
                        <span className={styles.date}>{item.date}</span>
                        <Link
                          href={item.website || ""}
                          target="_blank"
                          className={styles.site}
                        >
                          <b>{item.title}</b>
                        </Link>
                        <i>{item.organization}</i>
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
