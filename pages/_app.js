import "../styles/globals.css";

import "react-vertical-timeline-component/style.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
    if (typeof window !== "undefined") {
        AOS.init();
    }
    return <Component {...pageProps} />;
}

export default MyApp;
