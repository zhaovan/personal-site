import NavBar from "../components/navbar";
import styles from "../styles/About.module.css";
import shared from "../styles/Shared.module.css";
import Header from "../components/header";
import Footer from "../components/footer";
import AboutImage from "../public/media/about_ivan.jpeg";

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
      <h1 className={shared.titleText}>About</h1>
      <div>
        <div className={[shared.container, styles.newContainer].join(" ")}>
          <div className={styles.photoWrapper} data-aos="fade-right">
            <div className={styles.circle} />
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
                  baked goods, good vibes, strong drinks, meaningful words, and
                  playful software.
                </b>
              </p>
              <p className={styles.text}>
                Honestly, I'm still trying to figure out what I want to do in
                life but some areas that thrill me are{" "}
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
                build a better future. I'm in my era of hobby and exploration
                and am currently obsessed with film photography, short stories
                and poetry, and mixology. Catch me hanging out at random coffee
                shops, hammocking at the top of a mountain, or napping at home
                with my dog.
              </p>
              <p className={styles.text}>
                Some of the main questions that drive the work that I'm most
                interested in are:
              </p>
              <ul className={styles.text}>
                <li>
                  In what ways can we use technology (such as GPT-3) to push the
                  limits of creativity?
                </li>
                <li>
                  How can technology aid collective knowledge, collaboration,
                  and communication?
                </li>
                <li>
                  In what ways can we push formal boundaries of print, the
                  internet, and video games to develop interactive experiences?
                </li>
                <li>
                  How do the stories and lived experiences of families,
                  represented in media and culture, change our notion of self?
                </li>
              </ul>
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
