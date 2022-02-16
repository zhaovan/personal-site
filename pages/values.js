import NavBar from "../components/navbar";
import shared from "../styles/Shared.module.css";
import Footer from "../components/footer";
import Head from "next/head";

const principles = [
  {
    principle: "Tech is inherently not neutral",
    blurb:
      "You've probably heard me talk about tech ethics ad naseum, but I stand by the fact that we as humans and as technologists should always strive (within boundary, of course) to improve the world.",
  },
  {
    principle: "Relationships matter",
    blurb:
      "There's the age old saying that you're the product of your five closest friends. As a product guy, I believe that. But make sure you treat all your friends well.",
  },
  {
    principle: "Always be learning",
    blurb:
      'I think this quote from one of my favorite books, Educated, sums it up pretty well: "The decisions I made after that moment were not the ones she would have made. They were the choices of a changed person, a new self. You could call this selfhood many things. Transformation. Metamorphosis. Falsity. Betrayal. I call it an education."',
  },
];

const notes = [
  {
    statement:
      "I believe in being reachable to anyone. If I can somehow help you, please reach out to me.",
  },
  {
    statement:
      "I use Notion a lot (no I'm not the cofounder) and I like building tools around my own workflows. If you're trying to improve your efficiency, I recommend checking Notion out.",
  },
  {
    statement: "I always try to give the benefit of the doubt. Things happen!",
  },
];

export default function Work() {
  return (
    <div className={shared.page}>
      <Head>
        <title>Values</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <NavBar currPage="values" />
      <p className={shared.titleText}>Values!</p>
      <div
        data-aos="zoom-up"
        data-aos-duration="500"
        style={{ paddingBottom: "4rem" }}
      >
        {" "}
        <div className={shared.container} style={{ display: "block" }}>
          Before working together, I think it's helpful to understand things
          that I value and care about. As such, here are some things that you
          should know about me:
          <h1>Principles</h1>
          {principles.map((principle, i) => {
            const quote = principle.blurb.split(":")[1];
            return (
              <div key={i}>
                <h3>{principle.principle}</h3>
                <p>{principle.blurb}</p>
              </div>
            );
          })}
          {/* <h1>Other Notes:</h1>
          <ul>
            {notes.map((note, i) => {
              return (
                <li key={i} style={{ marginTop: '1%' }}>
                  {note.statement}
                </li>
              );
            })}
          </ul> */}
        </div>
      </div>

      <Footer />
    </div>
  );
}
