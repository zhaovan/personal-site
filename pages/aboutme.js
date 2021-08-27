import NavBar from '../components/navbar';
import styles from '../styles/AboutMe.module.css';
import shared from '../styles/Shared.module.css';
import Head from 'next/head';
import AboutImage from '../public/about_img.png';
import Footer from '../components/footer';

const links = [
  {
    text: 'Capitalism, Poverty and Class in Ratatouille',
    link: 'https://www.youtube.com/watch?v=EC2gRvG1RlI'
  },
  {
    link: 'https://www.youtube.com/watch?v=4UUJQH7GLms',
    text: 'Why How to Train Your Dragon has the best opening ever'
  },
  {
    link: 'https://placesjournal.org/article/post-it-note-city/',
    text: 'The Post-It Note City'
  }
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
          <div className={styles.photoWrapper} data-aos='fade-right'>
            <img
              src={AboutImage}
              className={styles.photo}
              alt='This is a terrible photo of me but with cute cats'
            />
          </div>

          <div style={{ marginLeft: '4%' }} data-aos='fade-left'>
            <div>
              <p className={styles.text}>
                I'm a dog lover from Seattle, WA, trying to fill this world with{' '}
                <b>
                  baked goods, good vibes, strong drinks, and playful software.
                </b>
              </p>
              <p className={styles.text}>
                Honestly, I'm still trying to figure out what I want to do in
                life but right now I'm excited about{' '}
                <a href='https://numinous.productions/ttft' target='_blank'>
                  tools for thought
                </a>
                ,{' '}
                <a href='https://culdesac.com' target='_blank'>
                  well designed cities
                </a>
                , and{' '}
                <a href='http://www.celestegame.com/' target='_blank'>
                  transformative games.
                </a>{' '}
                I'm probably reading some random articles about society,
                culture, art, and technology so if you find anything you like,
                please feel free to DM me on{' '}
                <a href='https://twitter.com/zhaovan8' target='_blank'>
                  Twitter.
                </a>
              </p>
              <p className={styles.text}>
                <b>Some essays and videos that I love:</b>
                <ul>
                  {links.map((currLink, i) => {
                    return (
                      <li className={styles.linkItem} key={i}>
                        <a href={currLink.link} target='_blank'>
                          {currLink.text}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
