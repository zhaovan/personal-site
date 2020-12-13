import Footer from "../components/footer";
import NavBar from "../components/navbar";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import styles from "../styles/News.module.css";
import Head from "next/head";

import shared from "../styles/Shared.module.css";

const news = [
    {
        date: "Summer 2021",
        title: "Software Engineering Intern",
        company: "Blend",
        website: "https://blend.com/",
        bodyText:
            "Signed on to join Blend as a software engineering intern for next summer! Excited to make impact in meaningful ways!",
    },
    {
        date: "October 2020-Present",
        title: "Investment Partner",
        company: "Dorm Room Fund",
        website: "http://dormroomfund.com/",
        bodyText:
            "Joined Dorm Room Fund on the Boston team. Excited to invest in the next generation of startup founders on a national scale 🇺🇸",
    },
    {
        date: "July 2020-Present",
        title: "Cofounder",
        company: "Tea Time",
        website: "http://teatime.substack.com/",
        bodyText:
            "Started Tea Time with a couple of friends, a community for LGBTQ+ people interested in tech and tech adjacent industries",
    },
    {
        date: "Dec 2019-Present",
        title: "Associate",
        company: "Van Wickle Ventures",
        website: "https://www.vanwickleventures.com/",
        bodyText:
            "Joined Van Wickle Ventures, Brown's student-run evergreen VC fund as a student associate",
    },
    {
        date: "Nov 2019 - May 2020",
        title: "Software Engineer and PM",
        company: "Intus Care",
        website: "https://intuscare.com/",
        bodyText:
            "Started at Intus Care as a software engineer and product manager, building out the initial MVP and ML algorithms ",
    },
    {
        date: "Oct 2019",
        title: "Participant",
        company: "IDEO Colab",
        website: "https://www.ideocolab.com/",
        bodyText:
            "Attended IDEO Colab's Makeathon in Cambridge where I helped make digital communication easier using BERT models",
    },
    {
        date: "June 2019 - Aug 2019",
        title: "Operations Intern",
        company: "Loftium",
        website: "https://loftium.com/",
        bodyText:
            "Worked at Loftium as an Operations Intern! Joined the Renter Operations Team where I helped with maximizing Airbnb performance and created a Messenger Chatbot",
    },
    {
        date: "Sept 2018 - Present",
        title: "Student",
        company: "Brown",
        website: "https://www.brown.edu/",
        bodyText:
            "Moved to Providence and started at Brown where I plan on double-majoring in Applied Math and Computer Science (wish me luck hehe)",
    },
];

export default function News() {
    return (
        <div className={shared.page}>
            <Head>
                <title>Ivan Zhao</title>
                <link rel="icon" href="/icon.ico" />
            </Head>
            <NavBar />
            <p className={shared.titleText}>News</p>
            <div
                className={shared.container}
                style={{ flexDirection: "column" }}
            >
                <div style={{ textAlign: "center", fontSize: "20px" }}>
                    I sometimes do things. Here's a way to keep track of some of
                    them (nonexhaustive by any means)
                </div>
                <VerticalTimeline
                    layout="1-column-left"
                    className={styles.timeline}
                >
                    {news.map((newsItem, i) => {
                        const currColor = i % 2 == 0 ? "#FF9AA2" : "#C7CEEA";
                        return (
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{
                                    boxShadow: "5px 5px",
                                    borderRadius: "10px",
                                    border: "solid",
                                }}
                                contentArrowStyle={{
                                    borderRight: "12px solid " + currColor,
                                }}
                                date={newsItem.date}
                                iconStyle={{
                                    background: currColor,
                                    color: "#fff",
                                }}
                                key={i}
                            >
                                <h3 className="vertical-timeline-element-title">
                                    <a href={newsItem.website} target="_blank">
                                        {newsItem.company}
                                    </a>
                                </h3>
                                <h4
                                    className="vertical-timeline-element-subtitle"
                                    style={{ fontStyle: "italic" }}
                                >
                                    {newsItem.title}
                                </h4>
                                <p>{newsItem.bodyText}</p>
                            </VerticalTimelineElement>
                        );
                    })}
                </VerticalTimeline>
            </div>
            <Footer />
        </div>
    );
}
