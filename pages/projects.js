import NavBar from "../components/navbar";
import shared from "../styles/Shared.module.css";
import Footer from "../components/footer";
import Head from "next/head";
import styles from "../styles/Projects.module.css";

const projects = [
    {
        name: "Roll Call",
        description:
            "A mobile app built in React Native on PostgreSQL and Express for users to create a voting plan for the upcoming 2020 election.",
        website: "https://rollcall.vote/",
        tags: ["product", "development"],
    },
    {
        name: "Lunch Meet",
        description:
            "A lightweight video calling app made for IvyHacks that allows users to randomly find other working professionals, students, and people who want to chat with someone during their lunch break.",
        website: "https://lunchmeat.herokuapp.com/",
        tags: ["design", "development"],
    },
    {
        name: "Staying Informed Just to Feel Something",
        description:
            "A web app that allows users to search for tweets from hot topics or trends with the sentiment values and truth scores attached to them ",
        website: "https://github.com/zhaovan/twitter-hackathon",
        tags: ["design", "development"],
    },
    {
        name: "Tarrey Town Audio",
        description:
            "A lightweight audio player experience to replicate the side quest from Legend of Zelda: Breath of the Wild. ",
        website: "https://github.com/zhaovan/tarrey-town",
        tags: ["development"],
    },
    {
        name: "Optical Music Recognition",
        description:
            "Python script for reading sheet music images and converting them to MIDI file using bounding boxes, feature detection, and a CNN",
        website: "https://github.com/zhaovan/optical-music-recognition",
        tags: ["classwork", "development"],
    },
    {
        name: "Rhyme Time",
        description:
            "DL Model using LSTM's to webscrape, preprocess and parse, and then produce limericks",
        website: "https://github.com/zhaovan/lstm-rhyme-time",
        tags: ["classwork", "development"],
    },
    {
        name: "Communify",
        description:
            "Mockup in Adobe XD for an iPad app for kids to learn about the coronavirus for Nick X Adobe Creative Jam",
        website:
            "https://xd.adobe.com/view/2f06327c-4cd1-408c-7c38-64d3b967668e-5937/",
        tags: ["product", "development"],
    },
    {
        name: "Wander",
        description:
            "A mobile app built in React Native on PostgreSQL and Express for users to create a voting plan for the upcoming 2020 election.",
        website: "https://github.com/zhaovan/wander",
        tags: ["design", "development"],
    },
    {
        name: "Seattle's Startup Ecosystem",
        description:
            "Full-year reasearch project on social variables that contributed to tech entrepreneurship in the Greater Seattle Area",
        website: "/research_paper",
        tags: ["research"],
    },
];

export default function Projects() {
    return (
        <div className={shared.page}>
            <Head>
                <title>Ivan Zhao</title>
                <link rel="icon" href="/icon.ico" />
            </Head>
            <NavBar />
            <div
                className={shared.container}
                style={{ flexDirection: "column" }}
            >
                <div style={{ textAlign: "center", fontSize: "20px" }}>
                    I sometimes work on things. Here's a couple of them that
                    (sort of) turned out.
                </div>

                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        marginBottom: "2%",
                    }}
                >
                    {projects.map((project, i) => {
                        return (
                            <div
                                style={{
                                    width: "40%",
                                    border: "solid",
                                    borderRadius: "10px",
                                    padding: "2%",
                                    margin: "3%",
                                    textAlign: "center",
                                    justifyContent: "center",
                                    boxShadow: "5px 5px",
                                }}
                            >
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
                                            <div
                                                className={[
                                                    currStyle,
                                                    styles.resumeTag,
                                                ].join(" ")}
                                            >
                                                {tag}
                                            </div>
                                        );
                                    })}
                                </div>

                                <div>
                                    <div className={styles.description}>
                                        {project.description}
                                    </div>
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
