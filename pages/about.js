import NavBar from "../components/navbar";
import styles from "../styles/About.module.css";
import shared from "../styles/Shared.module.css";
import Header from "../components/header";
import Footer from "../components/footer";
import AboutImage from "../public/media/about_ivan.jpg";

const links = [
  {
    text: "Capitalism, Poverty and Class in Ratatouille",
    link: "https://www.youtube.com/watch?v=EC2gRvG1RlI",
  },
  {
    link: "https://www.youtube.com/watch?v=4UUJQH7GLms",
    text: "Why How to Train Your Dragon has the best opening ever",
  },
  {
    link: "https://placesjournal.org/article/post-it-note-city/",
    text: "The Post-It Note City",
  },
];

export default function About() {
  return (
    <div className={shared.page}>
      <Header title={"About"} />
      <NavBar currPage="about" />
      <p className={shared.titleText}>About</p>
      <div>
        <div className={[shared.container, styles.newContainer].join(" ")}>
          <div className={styles.photoWrapper} data-aos="fade-right">
            <div className={styles.circle} />
            <div className={styles.triangle} />
            <img
              src={AboutImage}
              className={styles.photo}
              alt="This is a terrible photo of me but with cute cats"
            />
          </div>

          <div style={{ marginLeft: "4%" }}>
            <div data-aos="fade-left" data-duration="1000">
              <p className={styles.text}>
                I'm a dog lover from Seattle, WA, trying to fill this world with{" "}
                <b>
                  baked goods, good vibes, strong drinks, and playful software.
                </b>
              </p>
              <p className={styles.text}>
                Honestly, I'm still trying to figure out what I want to do in
                life but right now I'm excited about{" "}
                <a href="https://numinous.productions/ttft" target="_blank">
                  tools for thought
                </a>
                ,{" "}
                <a href="https://culdesac.com" target="_blank">
                  well designed cities
                </a>
                , and{" "}
                <a href="http://www.celestegame.com/" target="_blank">
                  transformative games.
                </a>{" "}
              </p>
              <p className={styles.text}>
                I fundamentally believe that technology, used judiciously, can
                build a better future. I'm working on creating ecosystems for
                better futures at{" "}
                <a href="https://reboothq.substack.com" target="_blank">
                  Reboot
                </a>{" "}
                and{" "}
                <a href="https://www.dormroomfund.com/" target="_blank">
                  Dorm Room Fund
                </a>
                , and investing in diverse founders at{" "}
                <a href="https://shl.vc/" target="_blank">
                  shl.vc.
                </a>{" "}
                I've also previously worked on improving in home-care for
                elderly patients at{" "}
                <a href="https://intuscare.com/" target="_blank">
                  Intus Care
                </a>
                , giving people the opportunity to live in cities at{" "}
                <a href="https://www.loftium.com/" target="_blank">
                  Loftium
                </a>
                , and allowing developers the ability to access location data at{" "}
                <a href="https://www.askiggy.com/">Ask Iggy</a>
              </p>
              <p className={styles.text}>
                <b>Some essays and videos that I love:</b>
                <ul>
                  {links.map((currLink, i) => {
                    return (
                      <li className={styles.linkItem} key={i}>
                        <a href={currLink.link} target="_blank">
                          {currLink.text}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
