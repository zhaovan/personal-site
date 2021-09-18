import { useState, useEffect } from 'react';
import Head from 'next/head';

import styles from '../styles/Home.module.css';
import NavBar from '../components/navbar';
import Typewriter from 'typewriter-effect';

import Footer from '../components/footer';
import shared from '../styles/Shared.module.css';
import portrait from '../public/portrait.png';

export default function Home() {
  return (
    <div className={shared.page}>
      <Head>
        <title>Ivan Zhao</title>
        <link rel='icon' href='/icon.ico' />
      </Head>
      <NavBar />
      <div className={[shared.container, styles.container].join(' ')}>
        <div
          data-aos='fade-up'
          data-aos-duration='750'
          data-aos-delay='50'
          className={styles.textBoxWrapper}
        >
          <p className={styles.title}>👋 Hey there, I'm Ivan!</p>
          <div className={styles.textBox}>
            <p>
              Welcome to my tiny corner of the internet where I'm probably
              tinkering with random software and tools. Most recently, I've been
              building better banking software at{' '}
              <a href='https://blendlabs.com' target='_blank'>
                Blend
              </a>{' '}
              and am currently thinking about interfaces at{' '}
              <a href='https://brown.edu' target='_blank'>
                Brown.
              </a>
            </p>
          </div>
        </div>
        <div
          className={styles.tabletDiv}
          data-aos='fade-left'
          data-aos-duration='1000'
          data-aos-delay='50'
        >
          <img src={portrait} alt='photo of me' className={styles.photo} />
          {/* <div className={styles.oval} style={{ margin: 'auto' }}></div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
