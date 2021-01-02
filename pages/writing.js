import React from "react";
import NavBar from "../components/navbar";
import Head from "next/head";
import shared from "../styles/Shared.module.css";

import styles from "../styles/Writing.module.css";
import Footer from "../components/footer";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";

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
            <p className={shared.titleText}>Writing!</p>
            <div data-aos="zoom-up" data-aos-duration="500">
                <div
                    className={shared.container}
                    style={{ flexDirection: "column" }}
                >
                    <div className={shared.firstText}>
                        I sometimes write things! They're usually pretty
                        informal but maybe you'll resonate with one of them:
                    </div>
                    <div className={styles.blogContainer}>
                        {allPostsData.map((post, i) => {
                            const link = `/writing/${post.id}`;
                            const readableDate = moment(post.date).format(
                                "MMMM Do YYYY"
                            );

                            return (
                                <div className={styles.postContainer}>
                                    <Link href={link} className={styles.title}>
                                        <div className={styles.title}>
                                            {post.title}
                                        </div>
                                    </Link>
                                    <div className={styles.subTitle}>
                                        {readableDate} · {post.duration}
                                    </div>
                                    <div className={styles.description}>
                                        {post.description}
                                    </div>
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
