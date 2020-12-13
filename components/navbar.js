import styles from "../styles/Navbar.module.css";
import Link from "next/link";

function LinkItem({ isCurrPage, currClass, link }) {
    const currStyle = isCurrPage ? { opacity: 1 } : { opacity: 0.7 };
    return (
        <li className={currClass} style={currStyle}>
            {link}
        </li>
    );
}

export default function NavBar({ currPage }) {
    return (
        <div className={styles.outerBar}>
            <Link href="/">
                <img
                    src="/doggo.png"
                    alt="Dog Illustration"
                    className={styles.logo}
                />
            </Link>
            <ul className={styles.listStyle}>
                <Link href="/aboutme">
                    <li className={styles.horizontal}>About Me</li>
                </Link>
                <Link href="/news">
                    <li className={styles.horizontal}>News</li>
                </Link>
                <Link href="/projects">
                    <li className={styles.horizontal}>Projects</li>
                </Link>
                <Link href="/work">
                    <li className={styles.horizontal}>How I Work</li>
                </Link>
            </ul>
            <hr className={styles.line} />
        </div>
    );
}
