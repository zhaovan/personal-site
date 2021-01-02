import React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import NavBar from "../../components/navbar";
import shared from "../../styles/Shared.module.css";
import Head from "next/head";
import Footer from "../../components/footer";
import styles from "../../styles/Blog.module.css";
import moment from "moment";

import writingStyles from "../../styles/Writing.module.css";
import Link from "next/link";

export default function PostTemplate({
    content,
    data,
    prevContent,
    nextContent,
}) {
    const readableDate = moment(data.date).format("MMMM Do YYYY");

    const prevLink = `/writing/${data.prev}`;
    const nextLink = `/writing/${data.next}`;

    return (
        <div className={shared.page}>
            <Head>
                <title>{data.title}</title>
                <link rel="icon" href="/icon.ico" />
            </Head>
            <NavBar currPage="writing" blogPost={true} />
            <div className={styles.container}>
                <h1 style={{ lineHeight: "normal" }}>{data.title}</h1>
                <p className={writingStyles.subTitle}>
                    {readableDate} · {data.duration}
                </p>
                <ReactMarkdown source={content} />
                <hr />
                {prevContent ? (
                    <Link href={prevLink}>
                        <div className={styles.prevLink}>
                            ← <a>{prevContent ? prevContent.data.title : ""}</a>
                        </div>
                    </Link>
                ) : (
                    <></>
                )}

                {nextContent ? (
                    <Link href={nextLink}>
                        <div className={styles.nextLink}>
                            <a>{nextContent ? nextContent.data.title : ""}</a>→
                        </div>
                    </Link>
                ) : (
                    <></>
                )}
                <div style={{ marginTop: "4%" }}>
                    Liked this or have thoughts? I'd love to hear them! Please
                    feel free to <a href="mailto:ivanzhao8@gmail.com">email</a>{" "}
                    me or hit me up on{" "}
                    <a href="https://twitter.com/zhaovan8">Twitter</a>.
                </div>
            </div>

            <Footer />
        </div>
    );
}

PostTemplate.getInitialProps = async (context) => {
    const { slug } = context.query;

    const content = await import(`../../posts/${slug}.md`);

    const data = matter(content.default);

    // data is stored in data.data so we need to get the prev and next from that
    const actualData = data.data;

    let prevContent;
    let nextContent;
    if (actualData.prev) {
        prevContent = await import(`../../posts/${actualData.prev}.md`);
        prevContent = matter(prevContent.default);
    }

    if (actualData.next) {
        nextContent = await import(`../../posts/${actualData.next}.md`);
        nextContent = matter(nextContent.default);
    }

    return { ...data, prevContent, nextContent };
};
