import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import doggo from '../public/doggo.png';

export default function NavBar({ currPage, blogPost }) {
  const active = { opacity: 1 };
  const notActive = { opacity: 0.4 };

  return (
    <div className={blogPost ? styles.blogPostBar : styles.nonBlogPostBar}>
      <div className={styles.outerBar}>
        <Link href='/'>
          <div style={{ minWidth: '4rem' }}>
            <img src={doggo} alt='Dog Illustration' className={styles.logo} />
          </div>
        </Link>
        <ul className={styles.listStyle}>
          <Link href='/aboutme'>
            <li
              className={styles.horizontal}
              style={currPage == 'aboutMe' ? active : notActive}
            >
              About Me
            </li>
          </Link>
          <Link href='/news'>
            <li
              className={styles.horizontal}
              style={currPage == 'news' ? active : notActive}
            >
              News
            </li>
          </Link>
          <Link href='/projects'>
            <li
              className={styles.horizontal}
              style={currPage == 'projects' ? active : notActive}
            >
              Projects
            </li>
          </Link>
          <Link href='/writing'>
            <li
              className={styles.horizontal}
              style={currPage == 'writing' ? active : notActive}
            >
              Writing
            </li>
          </Link>
          <Link href='/work'>
            <li
              className={styles.horizontal}
              style={currPage == 'work' ? active : notActive}
            >
              How I Work
            </li>
          </Link>
        </ul>
        <hr className={styles.line} />
      </div>
    </div>
  );
}
