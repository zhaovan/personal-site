import NavBar from "../components/navbar";
import { Timeline, TimelineEvent } from "react-event-timeline";

export default function News() {
    return (
        <>
            <NavBar />
            <div></div>
            <div style={{ width: "40%", margin: "auto" }}>
                I sometimes do things. Here's a way to keep track of some of
                them (nonexhaustive by any means)
                <Timeline>
                    <TimelineEvent
                        title="Internship Signing"
                        createdAt="November 2020"
                        icon={<i />}
                        iconColor="#6fba1c"
                    >
                        Signed on to join Blend as a software engineering intern
                        for next summer! Excited to make impact in meaningful
                        ways!
                    </TimelineEvent>
                    <TimelineEvent
                        title="You sent an email to John Doe"
                        createdAt="2016-09-11 09:06 AM"
                        icon={<i />}
                        iconColor="#03a9f4"
                    >
                        <p>Subject: Any updates?</p>
                        <p>
                            Like we talked, you said that you would share the
                            shipment details? This is an urgent order and so I
                            am losing patience. Can you expedite the process and
                            pls do share the details asap. Consider this a
                            gentle reminder if you are on track already!
                        </p>
                        <p>- Maya</p>
                    </TimelineEvent>
                </Timeline>
            </div>
        </>
    );
}
