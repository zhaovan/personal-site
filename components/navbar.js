import styles from "../styles/Navbar.module.css";
import Link from "next/link";

export default function NavBar() {
    return (
        <div
            style={{
                display: "flex",
                marginLeft: "8%",
                marginRight: "8%",
                marginTop: "1%",
                marginBottom: "1%",
            }}
        >
            <Link href="/">
                <img
                    src="/doggo.png"
                    alt="Dog Illustration"
                    className={styles.logo}
                />
            </Link>
            <ul style={{ listStyle: "none", alignSelf: "flex-end" }}>
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
        </div>
    );
}
