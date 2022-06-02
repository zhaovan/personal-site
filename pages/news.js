import Footer from "../components/footer";
import NavBar from "../components/navbar";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import styles from "../styles/News.module.css";
import Header from "../components/header";

import shared from "../styles/Shared.module.css";

import { dollar } from "react-icons-kit/fa/dollar";
import { briefcase } from "react-icons-kit/fa/briefcase";
import { users } from "react-icons-kit/fa/users";
import { heartbeat } from "react-icons-kit/fa/heartbeat";
import { rocket } from "react-icons-kit/fa/rocket";
import { home } from "react-icons-kit/fa/home";
import { book } from "react-icons-kit/fa/book";
import { thumbTack } from "react-icons-kit/fa/thumbTack";
import Icon from "react-icons-kit";

const news = [
  {
    date: "May 2021 - August 2021",
    title: "Software Engineering Intern",
    company: "Blend",
    website: "https://blend.com/",
    bodyText:
      "Joined Blend on the consumer banking team, working on powering the next generation of consumer lending.",
    logo: "fintech",
  },
  {
    date: "Jan 2021 - May 2021",
    title: "Software Engineering",
    company: "Ask Iggy",
    website: "https://www.askiggy.com/",
    bodyText:
      "Taking a semester off to work at Ask Iggy, the world's first location enrichment API startup.",
    logo: "thumbtack",
  },
  {
    date: "Feb 2021 - May 2021",
    title: "Fellow",
    company: "Reboot",
    website: "https://reboothq.substack.com/",
    bodyText:
      "Joined Reboot as a student fellow in the TechxRace group where I wrote about the state of venture",
    logo: "school",
  },
  {
    date: "October 2020 - Present",
    title: "Investment Partner",
    company: "Dorm Room Fund",
    website: "http://dormroomfund.com/",
    bodyText:
      "Joined Dorm Room Fund on the Boston team. Excited to invest in the next generation of startup founders on a national scale 🇺🇸.",
    logo: "vc",
  },
  {
    date: "July 2020 - Present",
    title: "Cofounder",
    company: "Tea Time",
    website: "http://teatime.substack.com/",
    bodyText:
      "Started Tea Time with a couple of friends, a community for LGBTQ+ people interested in tech and tech adjacent industries.",
    logo: "community",
  },
  {
    date: "Dec 2019 - Present",
    title: "Associate",
    company: "Van Wickle Ventures",
    website: "https://www.vanwickleventures.com/",
    bodyText:
      "Joined Van Wickle Ventures, Brown's student-run evergreen VC fund as a student associate.",
    logo: "vc",
  },
  {
    date: "Nov 2019 - May 2020",
    title: "Software Engineer and PM",
    company: "Intus Care",
    website: "https://intuscare.com/",
    bodyText:
      "Started at Intus Care as a software engineer and product manager, building out the initial MVP and ML algorithms.",
    logo: "healthtech",
  },
  {
    date: "Oct 2019",
    title: "Participant",
    company: "IDEO Colab",
    website: "https://www.ideocolab.com/",
    bodyText:
      "Attended IDEO Colab's Makeathon in Cambridge where I helped make digital communication easier using BERT models.",
    logo: "design",
  },
  {
    date: "June 2019 - Aug 2019",
    title: "Operations Intern",
    company: "Loftium",
    website: "https://loftium.com/",
    bodyText:
      "Worked at Loftium as an Operations Intern! Joined the Renter Operations Team where I helped with maximizing Airbnb performance and created a Messenger Chatbot.",
    logo: "proptech",
  },
  {
    date: "Sept 2018",
    title: "Student",
    company: "Brown",
    website: "https://www.brown.edu/",
    bodyText:
      "Moved to Providence and started at Brown where I plan on double-majoring in Applied Math and Computer Science (wish me luck hehe).",
    logo: "school",
  },
];

const iconMap = {
  school: <Icon icon={book} className={styles.icon} />,
  design: <Icon icon={rocket} className={styles.icon} />,
  proptech: <Icon icon={home} className={styles.icon} />,
  healthtech: <Icon icon={heartbeat} className={styles.icon} />,
  fintech: <Icon icon={dollar} className={styles.icon} />,
  vc: <Icon icon={briefcase} className={styles.icon} />,
  community: <Icon icon={users} className={styles.icon} />,
  thumbtack: <Icon icon={thumbTack} className={styles.icon} />,
};

export default function News() {
  return (
    <div className={shared.page}>
      <Header title={"News"} />
      <NavBar currPage="news" />
      <p className={shared.titleText}>News!</p>
      <div className={shared.container} style={{ flexDirection: "column" }}>
        <div className={shared.firstText}>
          I sometimes do things. Here's a way to keep track of some of them
          (nonexhaustive by any means)
        </div>
        <VerticalTimeline layout="1-column-left" className={styles.timeline}>
          {news.map((newsItem, i) => {
            const currColor = i % 2 == 0 ? "#FF9AA2" : "#C7CEEA";
            const currIcon = iconMap[newsItem.logo];
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
                icon={currIcon}
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
                <p style={{ fontFamily: "Montserrat" }}>{newsItem.bodyText}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
      <Footer />
    </div>
  );
}
