import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import NavBar from "../components/navbar";
import Typewriter from "typewriter-effect";

import Footer from "../components/footer";
import shared from "../styles/Shared.module.css";

export default function Home() {
    const intros = [
        "breaking code",
        "petting corgis",
        "designing apps",
        "baking cakes",
        "climbing walls",
    ];

    const num = Math.floor(Math.random() * intros.length);

    return (
        <div className={shared.page}>
            <Head>
                <title>Ivan Zhao</title>
                <link rel="icon" href="/icon.ico" />
                <meta charSet="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta property="og:image" content="/thumbnail.png" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    http-equiv="Content-Type"
                    content="text/html"
                    charSet="utf-8"
                />
                <meta
                    name="og:description"
                    content="Hi! I'm Ivan Zhao, a student at Brown trying to understand how we make decisions and the technology that drives it. Welcome to my personal site!"
                />
                <meta property="og:title" content="Ivan Zhao" />

                <meta property="og:url" content="https://ivanzhao.me" />
                <meta name="twitter:card" content="/thumbnail.png" />
            </Head>
            <NavBar />
            <div
                className={[shared.container, styles.container].join(" ")}
                data-aos="zoom-in"
                data-aos-duration="1000"
            >
                <div>
                    <div className={styles.title}>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(1050)
                                    .typeString("Hey, I'm Ivan and I'm ")
                                    .typeString(intros[num])
                                    .start();
                            }}
                        />
                    </div>

                    <div className={styles.textBox}>
                        <p className="animate__slideInUp">
                            I love building tools, workflows, and automation so
                            that I can spend less time doing work and more time
                            thinking about the random, crazy stuff in life. I've
                            most recently been:
                        </p>
                        <ul>
                            <li>
                                building <b>products</b> for{" "}
                                <a
                                    href="https://intuscare.com/"
                                    target="_blank"
                                    className={styles.sketch}
                                >
                                    Intus Care
                                </a>
                                ,{" "}
                                <a
                                    href="https://www.loftium.com/"
                                    target="_blank"
                                >
                                    Loftium
                                </a>
                                , and{" "}
                                <a href="https://www.mojotech.com/">Mojotech</a>
                            </li>
                            <li>
                                supporting <b>ecosystems</b> at{" "}
                                <a
                                    href="http://brownentrepreneurship.com/"
                                    target="_blank"
                                >
                                    Brown Entrepreneurship Program
                                </a>
                                ,{" "}
                                <a
                                    href="https://brownrisdinnovation.com"
                                    target="_blank"
                                >
                                    Brown RISD Innovation Community
                                </a>{" "}
                                and{" "}
                                <a
                                    href="https://teatime.substack.com/"
                                    target="_blank"
                                >
                                    Tea Time
                                </a>
                            </li>
                            <li>
                                making <b>investments</b> with{" "}
                                <a
                                    href="https://www.vanwickleventures.com/"
                                    target="_blank"
                                >
                                    Van Wickle Ventures
                                </a>{" "}
                                and{" "}
                                <a
                                    href="https://www.dormroomfund.com/"
                                    target="_blank"
                                >
                                    Dorm Room Fund
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.tabletDiv}>
                    <img
                        src="/portrait.png"
                        alt="photo of me"
                        className={styles.photo}
                    />
                    <div
                        className={styles.oval}
                        style={{ margin: "auto" }}
                    ></div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
