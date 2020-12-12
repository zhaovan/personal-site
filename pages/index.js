import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import NavBar from "../components/navbar";

import Footer from "../components/footer";
import shared from "../styles/Shared.module.css";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Ivan Zhao</title>
                <link rel="icon" href="/icon.ico" />
            </Head>
            <NavBar />
            <div
                style={{
                    display: "flex",
                    width: "70%",
                    margin: "auto",
                }}
            >
                <div style={{ margin: "auto" }}>
                    <div style={{ fontSize: "64px", marginTop: "8%" }}>
                        Hey there, I'm Ivan!
                    </div>

                    <div
                        style={{
                            marginTop: "2%",
                            width: "75%",
                            fontSize: "18px",
                        }}
                    >
                        <p className="animate__slideInUp">
                            I love building tools, workflows, and automation so
                            that I can spend less time doing work and more time
                            thinking about the random, crazy stuff in life. I've
                            most recently been:
                        </p>
                        <ul>
                            <li>
                                building <b>products</b> to help people at{" "}
                                <a
                                    href="https://intuscare.com/"
                                    target="_blank"
                                    className={shared.site}
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
                                    Entrepreneurship Program
                                </a>
                                ,{" "}
                                <a
                                    href="https://brownrisdinnovation.com"
                                    target="_blank"
                                >
                                    BRIC
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
                                making <b>investments</b> at{" "}
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
                <div>
                    <img
                        src="/illustration.png"
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
