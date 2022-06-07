import Footer from "../components/footer";
import NavBar from "../components/navbar";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import styles from "../styles/Changelog.module.css";
import Header from "../components/header";

import shared from "../styles/Shared.module.css";

import { dollar } from "react-icons-kit/fa/dollar";
import { briefcase } from "react-icons-kit/fa/briefcase";
import { users } from "react-icons-kit/fa/users";
import { heartbeat } from "react-icons-kit/fa/heartbeat";
import { rocket } from "react-icons-kit/fa/rocket";
import { microphone } from "react-icons-kit/fa/microphone";
import { home } from "react-icons-kit/fa/home";
import { book } from "react-icons-kit/fa/book";
import { thumbTack } from "react-icons-kit/fa/thumbTack";
import { code } from "react-icons-kit/fa/code";
import { frownO } from "react-icons-kit/fa/frownO";
import Icon from "react-icons-kit";

import changelog from "../data/changelog";

const iconMap = {
  school: <Icon icon={book} className={styles.icon} />,
  design: <Icon icon={rocket} className={styles.icon} />,

  job: <Icon icon={briefcase} className={styles.icon} />,
  community: <Icon icon={users} className={styles.icon} />,
  podcast: <Icon icon={microphone} className={styles.icon} />,
  code: <Icon icon={code} className={styles.icon} />,
  sad: <Icon icon={frownO} className={styles.icon} />,
};

export default function Changelog() {
  return (
    <div className={shared.page}>
      <Header title={"Changelog"} />
      <NavBar currPage="changelog" />
      <p className={shared.titleText}>Changelog!</p>
      <div className={shared.container} style={{ flexDirection: "column" }}>
        <div className={shared.firstText}>
          I sometimes do things. Here's a way to keep track of some of them
          (nonexhaustive by any means)
        </div>
        <VerticalTimeline layout="1-column-left" className={styles.timeline}>
          {changelog.map((newsItem, i) => {
            const currColor = i % 2 == 0 ? "gold" : "#C7CEEA";
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
