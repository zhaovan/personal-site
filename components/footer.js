import { twitterSquare } from "react-icons-kit/fa/twitterSquare";
import { medium } from "react-icons-kit/fa/medium";
import { linkedinSquare } from "react-icons-kit/fa/linkedinSquare";
import { instagram } from "react-icons-kit/fa/instagram";
import { fileTextO } from "react-icons-kit/fa/fileTextO";
import { githubSquare } from "react-icons-kit/fa/githubSquare";
import { envelope } from "react-icons-kit/fa/envelope";
import Icon from "react-icons-kit";
import styles from "../styles/Footer.module.css";
import Typewriter from "typewriter-effect";

const date = new Date();

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.list}>
                <li className={styles.horizontal}>
                    <a
                        href="https://www.instagram.com/ivan_zhao88/"
                        className={styles.noHighlight}
                        target="_blank"
                    >
                        <Icon icon={instagram} />
                    </a>
                </li>
                <li className={styles.horizontal}>
                    <a
                        href="https://twitter.com/zhaovan8"
                        className={styles.noHighlight}
                        target="_blank"
                    >
                        <Icon icon={twitterSquare} />
                    </a>
                </li>
                <li className={styles.horizontal}>
                    <a
                        href="http://linkedin.com/in/ivanzhao8"
                        className={styles.noHighlight}
                        target="_blank"
                    >
                        <Icon icon={linkedinSquare} />
                    </a>
                </li>
                <li className={styles.horizontal}>
                    <a
                        href="https://medium.com/@ivanzhao8/"
                        className={styles.noHighlight}
                        target="_blank"
                    >
                        <Icon icon={medium} />
                    </a>
                </li>
                <li className={styles.horizontal}>
                    <a
                        href="https://github.com/zhaovan"
                        className={styles.noHighlight}
                        target="_blank"
                    >
                        <Icon icon={githubSquare} />
                    </a>
                </li>
                <li className={styles.horizontal}>
                    <a
                        href="/Ivan_Zhao.pdf"
                        target="_blank"
                        className={styles.noHighlight}
                    >
                        <Icon icon={fileTextO} />
                    </a>
                </li>
                <li className={styles.horizontal}>
                    <a
                        href="mailto:ivanzhao8@gmail.com"
                        target="_blank"
                        className={styles.noHighlight}
                    >
                        <Icon icon={envelope} />
                    </a>
                </li>
            </ul>

            <div
                style={{
                    marginLeft: "2.5%",
                    fontStyle: "italic",
                    width: "100%",
                }}
            >
                © {date.getFullYear()} Ivan Zhao, Bellevue, WA
            </div>
        </footer>
    );
}
