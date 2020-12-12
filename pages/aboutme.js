import NavBar from "../components/navbar";
import styles from "../styles/AboutMe.module.css";
import shared from "../styles/Shared.module.css";
import Head from "next/head";
import Typewriter from "typewriter-effect";

import Footer from "../components/footer";

export default function AboutMe() {
    return (
        <div className={shared.page}>
            <Head>
                <title>Ivan Zhao</title>
                <link rel="icon" href="/icon.ico" />
            </Head>
            <NavBar />
            <div className={shared.container}>
                <div style={{ marginTop: "7%" }}>
                    <img
                        src="./about_img1.png"
                        className={styles.photo}
                        alt="This is a terrible photo of me but with cute cats"
                    />
                </div>

                <div style={{ marginLeft: "4%" }}>
                    <div style={{ marginTop: "7%", fontSize: "20px" }}>
                        <p>
                            I'm a dog lover from Seattle, WA. I love
                            understanding decision making frameworks, both from
                            a technical perspective (such as algorithmic
                            decision making) and from a psychological
                            perspective (especially around human factors). I'm
                            also super passionate about inclusive design and
                            accesibillity, specifically around topics in urban
                            development and design, tech recruiting, and the
                            venture capital/startup ecosystem.
                        </p>
                        <p>
                            Other things of interest (in no particular order):
                            building a college-like community in a post-college
                            world, redefining the home space, LGBTQ+ initiatives
                            in the startup and venture capital scene,&nbsp;
                            <a
                                href="http://www.celestegame.com/"
                                target="_blank"
                            >
                                Celeste
                            </a>
                            ,&nbsp;
                            <a
                                href="http://www.tuesdayknightgames.com/tworoomsandaboom"
                                target="_blank"
                            >
                                social deduction games
                            </a>
                            , baking, crosswords, art history, rock climbing,
                            dogs, the Oxford Comma, and musicals.
                        </p>
                        <p>
                            When I'm not constantly struggling with CSS, you can
                            find me climbing walls (rock or manmade), hanging
                            out with my dog, skiing, or playing games
                        </p>
                        <p>
                            If you're a student who identifies as LGBTQ+ and/or
                            is building a startup, I would absolutely LOVE to
                            hear from you and chat! Feel free to email me at{" "}
                            <a href="mailto:izhao@dormroomfund.com">
                                izhao@dormroomfund.com
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                    src="/jack.gif"
                    alt="loop of gif of jack russell puppy"
                    className={styles.jack}
                />
            </div>
            <Footer />
        </div>
    );
}
