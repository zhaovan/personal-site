import NavBar from '../components/navbar';
import styles from '../styles/AboutMe.module.css';
import shared from '../styles/Shared.module.css';
import Head from 'next/head';
import AboutImage from '../public/about_img.png';
import Footer from '../components/footer';

const hobbies = [
  'baking',
  'crosswords',
  'art history',
  'rock climbing',
  'dogs',
  'cocktail making',
  'musicals'
];

export default function AboutMe() {
  return (
    <div className={shared.page}>
      <Head>
        <title>About Me</title>
        <link rel='icon' href='/icon.ico' />
      </Head>
      <NavBar currPage='aboutMe' />
      <div>
        <p className={shared.titleText}>About Me!</p>
        <div className={[shared.container, styles.newContainer].join(' ')}>
          <div style={{ marginTop: '3%' }} data-aos='fade-right'>
            <img
              src={AboutImage}
              className={styles.photo}
              alt='This is a terrible photo of me but with cute cats'
            />
          </div>

          <div style={{ marginLeft: '4%' }} data-aos='fade-left'>
            <div
              style={{
                marginTop: '5%',
                fontSize: '18px'
              }}
            >
              <p className={styles.text}>
                I'm a dog lover from Seattle, WA, curious about decision making
                frameworks, both from a technical perspective (such as
                algorithmic decision making) and from a psychological
                perspective (especially around human factors). I'm also
                passionate about D&I and accessibility in urbanism, tech
                recruiting, and the venture capital/startup ecosystem.
              </p>
              <p className={styles.text}>
                <b>Other things of interest (in no particular order):</b>
                <ul>
                  <li className={styles.hobbyItem}>
                    <a href='http://www.celestegame.com/' target='_blank'>
                      Celeste
                    </a>
                  </li>
                  <li className={styles.hobbyItem}>
                    <a
                      href='http://www.tuesdayknightgames.com/tworoomsandaboom'
                      target='_blank'
                    >
                      social deduction games
                    </a>
                  </li>
                  {hobbies.map((e) => {
                    return (
                      <li key={e} className={styles.hobbyItem}>
                        {e}
                      </li>
                    );
                  })}
                </ul>
              </p>
              <p className={styles.text}>
                If you're a student who identifies as LGBTQ+ and/or is building
                a startup, I would absolutely LOVE to hear from you and chat!
                Feel free to email me at{' '}
                <a href='mailto:izhao@dormroomfund.com'>
                  izhao@dormroomfund.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
