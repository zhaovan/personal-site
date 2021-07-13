import { useState, useEffect } from 'react';
import Head from 'next/head';

import styles from '../styles/Home.module.css';
import NavBar from '../components/navbar';
import Typewriter from 'typewriter-effect';

import Footer from '../components/footer';
import shared from '../styles/Shared.module.css';

export default function Home() {
  const intros = [
    'breaking code',
    'petting corgis',
    'designing apps',
    'baking cakes',
    'climbing walls'
  ];

  const num = Math.floor(Math.random() * intros.length);
  useEffect(() => {
    if (window === 'undefined') {
      return;
    }
  }, []);

  return (
    <div className={shared.page}>
      <Head>
        <title>Ivan Zhao</title>
        <link rel='icon' href='/icon.ico' />
      </Head>
      <NavBar />
      <div className={[shared.container, styles.container].join(' ')}>
        <div data-aos='fade-up' data-aos-duration='750'>
          <div className={styles.title}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hey, I'm Ivan and I'm ")
                  .typeString(intros[num])
                  .start();
              }}
              options={{ changeDelay: 15, delay: 45 }}
            />
          </div>

          <div
            className={styles.textBox}
            data-aos='fade-up'
            data-aos-delay='2000'
            data-aos-duration='800'
          >
            <p>
              I love building tools, workflows, and automation so that I can
              spend less time doing work and more time thinking about the
              random, crazy stuff in life. I've most recently been:
            </p>
            <ul>
              <li>
                building <b>products</b> for{' '}
                <a
                  href='https://intuscare.com/'
                  target='_blank'
                  className={styles.sketch}
                >
                  Intus Care
                </a>
                ,{' '}
                <a href='https://www.loftium.com/' target='_blank'>
                  Loftium
                </a>
                , and <a href='https://www.mojotech.com/'>Mojotech</a>
              </li>
              <li>
                supporting <b>ecosystems</b> at{' '}
                <a href='https://reboothq.substack.com' target='_blank'>
                  Reboot
                </a>
                ,{' '}
                <a href='https://brownrisdinnovation.com' target='_blank'>
                  Brown RISD Innovation Community
                </a>{' '}
                and{' '}
                <a href='https://teatime.substack.com/' target='_blank'>
                  Tea Time
                </a>
              </li>
              <li>
                making <b>investments</b> with{' '}
                <a href='https://www.vanwickleventures.com/' target='_blank'>
                  Van Wickle Ventures
                </a>{' '}
                and{' '}
                <a href='https://www.dormroomfund.com/' target='_blank'>
                  Dorm Room Fund
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={styles.tabletDiv}
          data-aos='fade-left'
          data-aos-duration='1000'
        >
          <img src='/portrait.png' alt='photo of me' className={styles.photo} />
          <div className={styles.oval} style={{ margin: 'auto' }}></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
