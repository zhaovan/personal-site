import NavBar from '../components/navbar';
import styles from '../styles/AboutMe.module.css';
import shared from '../styles/Shared.module.css';
import Head from 'next/head';

import Footer from '../components/footer';

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
              src='./about_img1.png'
              className={styles.photo}
              alt='This is a terrible photo of me but with cute cats'
            />
          </div>

          <div style={{ marginLeft: '4%' }} data-aos='fade-left'>
            <div
              style={{
                marginTop: '5%',
                fontSize: '18px',
              }}
            >
              <p className={styles.text}>
                I'm a dog lover from Seattle, WA. I love understanding decision
                making frameworks, both from a technical perspective (such as
                algorithmic decision making) and from a psychological
                perspective (especially around human factors). I'm also an
                advocate for inclusive design and accessibillity, specifically
                around topics in urbanism, tech recruiting, and the venture
                capital/startup ecosystem.
              </p>
              <p className={styles.text}>
                Other things of interest (in no particular order): building a
                college-like community in a post-college world, redefining the
                home space, LGBTQ+ initiatives in the startup and venture
                capital scene,&nbsp;
                <a href='http://www.celestegame.com/' target='_blank'>
                  Celeste
                </a>
                ,&nbsp;
                <a
                  href='http://www.tuesdayknightgames.com/tworoomsandaboom'
                  target='_blank'
                >
                  social deduction games
                </a>
                , baking, crosswords, art history, rock climbing, dogs, the
                Oxford Comma, and musicals.
              </p>
              <p className={styles.text}>
                When I'm not constantly struggling with CSS, you can find me
                climbing walls (rock or manmade), hanging out with my dog,
                skiing, or playing games.
              </p>
              <p className={styles.text}>
                Some questions I'm thinking about:
                <ul className={styles.questions}>
                  <li>
                    Marginalized communities often "bear the burden" in
                    advocating for themselves in systems of power that work
                    negatively against them. How can we change and break the
                    system so that this isn't the case?
                  </li>
                  <li>
                    Thinking is commonly done in individualized cases. How can
                    we create tools around collective thought that provide more
                    interesting ways to brainstorm innovative ideas?
                  </li>
                  <li>
                    The internet is full of resources, but we often deal with
                    choice paralysis when looking at topics. How can we make
                    more informed decisions around the things in our daily
                    lives?
                  </li>
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
