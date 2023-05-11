import React from "react";
import NavBar from "../components/navbar";
import Head from "next/head";
import shared from "../styles/Shared.module.css";

import styles from "../styles/Writing.module.css";
import Footer from "../components/footer";
import publications from "../data/publications";
// import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";

import moment from "moment";

export default function Writing() {
  return (
    <div className={shared.page}>
      <Head>
        <title>Writing</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <NavBar currPage="writing" />
      <p className={shared.firstText}>
        Some selected work. For more informal personal stuff, try my{" "}
        <Link href="https://thoughtswithcorgo.substack.com/">newsletter</Link>
      </p>
      <div data-aos="zoom-up" data-aos-duration="500">
        <div className={shared.container}>
          <ul>
            {publications.map((pubs, i) => {
              const genre = Object.keys(pubs)[0];

              return (
                <span key={i}>
                  <p>{genre}</p>
                  {pubs[genre].map((pub, i) => {
                    return (
                      <li className={styles.publication}>
                        <Link href={pub.link || ""} target="__blank">
                          <b>{pub.title}</b>
                        </Link>{" "}
                        / <i>{pub.publication}</i> / {pub.date}
                      </li>
                    );
                  })}
                </span>
              );
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
