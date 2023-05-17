import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const navLocation = ["projects", "about"];

export default function NavBar({ currPage, blogPost }) {
  const active = { opacity: 1 };
  const notActive = { opacity: 0.4 };

  return (
    <div className={blogPost ? styles.blogPostBar : styles.nonBlogPostBar}>
      <div className={styles.outerBar}>
        <Link href="/">
          <div className={styles.wrapper}>
            <img
              src={"/media/doggo.png"}
              alt="Dog Illustration"
              className={styles.logo}
            />
          </div>
        </Link>
        <span>
          <ul className={styles.listStyle}>
            {navLocation.map((page, idx) => {
              return (
                <Link href={`/${page}`} key={idx}>
                  <li
                    className={styles.horizontal}
                    style={currPage == page ? active : notActive}
                  >
                    {page.slice(0, 1).toUpperCase() + page.slice(1)}
                  </li>
                </Link>
              );
            })}
          </ul>
        </span>
        <hr className={styles.line} />
      </div>
    </div>
  );
}
