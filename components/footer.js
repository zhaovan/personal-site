import { twitterSquare } from "react-icons-kit/fa/twitterSquare";
import { medium } from "react-icons-kit/fa/medium";
import { linkedinSquare } from "react-icons-kit/fa/linkedinSquare";
import { instagram } from "react-icons-kit/fa/instagram";
import { fileTextO } from "react-icons-kit/fa/fileTextO";
import { githubSquare } from "react-icons-kit/fa/githubSquare";
import Icon from "react-icons-kit";
import styles from "../styles/Footer.module.css";

const date = new Date();

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div style={{ marginLeft: "2.5%", fontStyle: "italic" }}>
                © {date.getFullYear()} Ivan Zhao, Bellevue, WA
            </div>
            <ul>
                <li className={styles.horizontal}>
                    <a
                        href="https://www.instagram.com/ivan_zhao88/"
                        class="no-highlight"
                        target="_blank"
                    >
                        <Icon icon={instagram} />
                    </a>
                </li>
                <li className={styles.horizontal}>
                    <a
                        href="https://twitter.com/zhaovan8"
                        class="no-highlight"
                        target="_blank"
                    >
                        <Icon icon={twitterSquare} />
                    </a>
                </li>
                <li className={styles.horizontal}>
                    <a
                        href="http://linkedin.com/in/ivanzhao8"
                        class="no-highlight"
                        target="_blank"
                    >
                        <Icon icon={linkedinSquare} />
                    </a>
                </li>
                <li className={styles.horizontal}>
                    <a
                        href="https://medium.com/@ivanzhao8/"
                        class="no-highlight"
                        target="_blank"
                    >
                        <Icon icon={medium} />
                    </a>
                </li>
                <li className={styles.horizontal}>
                    <a
                        href="https://github.com/zhaovan"
                        class="no-highlight"
                        target="_blank"
                    >
                        <Icon icon={githubSquare} />
                    </a>
                </li>
                <li className={styles.horizontal}>
                    <Icon icon={fileTextO} />
                </li>
            </ul>
        </footer>
    );
}
