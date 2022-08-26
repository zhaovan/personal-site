import React from "react";
import NavBar from "../components/navbar";
import Head from "next/head";
import shared from "../styles/Shared.module.css";

import styles from "../styles/Writing.module.css";
import Footer from "../components/footer";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Subscribe from "../components/subscribe";

import moment from "moment";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Writing({ allPostsData }) {
  return (
    <div className={shared.page}>
      <Head>
        <title>Writing</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <NavBar currPage="writing" />
      <h1 className={shared.titleText}>Writing!</h1>
      <div data-aos="zoom-up" data-aos-duration="500">
        <div className={shared.container} style={{ flexDirection: "column" }}>
          <p className={shared.firstText}>
            I sometimes write things! They're usually pretty informal but maybe
            you'll resonate with one of them...
          </p>
          <div className={styles.blogContainer}>
            <Subscribe />
            {allPostsData.map((post, i) => {
              const link = `/writing/${post.id}`;
              const readableDate = moment(post.date).format("MMMM Do YYYY");

              return (
                <div className={styles.postContainer} key={i}>
                  <Link href={link} className={styles.title}>
                    <h3 className={styles.title}>{post.title}</h3>
                  </Link>
                  <p className={styles.subTitle}>
                    {readableDate} · {post.duration}
                  </p>
                  <div className={styles.description}>{post.description}</div>
                  <hr className={styles.line} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
