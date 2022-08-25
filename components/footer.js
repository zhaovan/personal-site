import { twitterSquare } from "react-icons-kit/fa/twitterSquare";
import { medium } from "react-icons-kit/fa/medium";
import { linkedinSquare } from "react-icons-kit/fa/linkedinSquare";
import { instagram } from "react-icons-kit/fa/instagram";
import { fileTextO } from "react-icons-kit/fa/fileTextO";
import { githubSquare } from "react-icons-kit/fa/githubSquare";
import { envelope } from "react-icons-kit/fa/envelope";
import Icon from "react-icons-kit";
import styles from "../styles/Footer.module.css";

const date = new Date();

const links = [
  {
    link: "https://www.instagram.com/zhaovan8/",
    type: "ig",
  },
  {
    link: "https://twitter.com/zhaovan8",
    type: "twitter",
  },
  {
    link: "http://linkedin.com/in/ivanzhao8",
    type: "li",
  },
  {
    link: "https://github.com/zhaovan",
    type: "github",
  },
  {
    link: "/Ivan_Zhao.pdf",
    type: "resume",
  },
  {
    link: "mailto:ivanzhao8@gmail.com",
    type: "email",
  },
];

const iconMap = {
  ig: <Icon icon={instagram} size={20} />,
  li: <Icon icon={linkedinSquare} size={20} />,
  twitter: <Icon icon={twitterSquare} size={20} />,
  md: <Icon icon={medium} size={20} />,
  github: <Icon icon={githubSquare} size={20} />,
  resume: <Icon icon={fileTextO} size={20} />,
  email: <Icon icon={envelope} size={20} />,
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        {links.map((e, i) => {
          const currIcon = iconMap[e.type];
          return (
            <li className={styles.horizontal} key={i}>
              <a href={e.link} className={styles.noHighlight} target="_blank">
                {currIcon}
              </a>
            </li>
          );
        })}
      </ul>

      <div className={styles.footerText}>
        © {date.getFullYear()} Ivan Zhao, made with ☕ and 🍵
      </div>
    </footer>
  );
}
