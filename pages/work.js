import NavBar from "../components/navbar";
import shared from "../styles/Shared.module.css";
import Footer from "../components/footer";
import Head from "next/head";

const principles = [
    {
        principle: "Tech is inherently not neutral",
        blurb:
            "You've probably heard me talk about tech ethics ad naseum, but I stand by the fact that we as humans and as technologists should always strive (within boundary, of course) to improve the world",
    },
    {
        principle: "Relationships matter",
        blurb:
            "There's the age old saying that you're the product of your five closest friends. As a product guy, I believe that. But make sure you treat all your friends well",
    },
    {
        principle: "Always be learning",
        blurb:
            'I think this quote from one of my favorite books, Educated, sums it up pretty well: "The decisions I made after that moment were not the ones she would have made. They were the choices of a changed person, a new self. You could call this selfhood many things. Transformation. Metamorphosis. Falsity. Betrayal. I call it an education"',
    },
];

const notes = [
    {
        statement:
            "I generally work between the hours of 9am-5pm PST (or whatever timezone I'm in that day). That being said, I flex my time depending on the urgency of a project or how in the zone I am",
    },
    {
        statement:
            "I believe in being reachable to anyone. If I can somehow help you, please reach out to me.",
    },
    {
        statement:
            "In the same vein, I'd say I have some (functional) knowledge around VC, startups, full stack development, visual design, product design, and doggos. Anything else is a toss up",
    },
    {
        statement:
            "I use Notion a lot (no I'm not the cofounder) and I like building tools around my own workflows. If you're trying to improve your efficiency, I recommend checking Notion out",
    },
    {
        statement:
            "I always try to give the benefit of the doubt whenever something happens. Things happen!",
    },
];

export default function Work() {
    return (
        <div className={shared.page}>
            <Head>
                <title>How I Work</title>
                <link rel="icon" href="/icon.ico" />
            </Head>
            <NavBar />

            <div className={shared.container} style={{ display: "block" }}>
                In the same vein that&nbsp;{" "}
                <a href="https://www.notion.so/How-can-I-help-you-fb75f2f5ee994bad98998a2b97a586b0">
                    @Lolita Taub&nbsp;
                </a>{" "}
                and&nbsp;
                <a href="https://github.com/hepwori/wwi/">@Isaac Hepworth</a>
                &nbsp; provide ways that they can be useful to you, I wanted to
                start compiling some of the ways that I can help out. As such,
                here's some principles that I hold close to my heart whenever I
                make decisions and some things that I value:
                <h1>Principles</h1>
                {principles.map((principle) => {
                    const quote = principle.blurb.split(":")[1];
                    return (
                        <>
                            <h3>{principle.principle}</h3>
                            <p>{principle.blurb}</p>
                        </>
                    );
                })}
                <h1>Other Notes:</h1>
                <ul>
                    {notes.map((note, i) => {
                        return <li key={i}>{note.statement}</li>;
                    })}
                </ul>
            </div>
            <Footer />
        </div>
    );
}
