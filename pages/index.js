import Header from "../components/header";
// import BottomNavbar from "../components/BottomNavbar";
import styles from "../styles/Home.module.css";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import shared from "../styles/Shared.module.css";
import cabin from "../public/media/home.gif";

export default function Home() {
    return (
        <div className={shared.page}>
            <Header title={"Ivan Zhao"} />
            <NavBar />
            <div className={[shared.container, styles.container].join(" ")}>
                <div
                    data-aos="fade-up"
                    data-aos-duration="750"
                    data-aos-delay="50"
                    className={styles.textBoxWrapper}
                >
                    <p className={styles.title}>👋 Hey there, I'm Ivan!</p>
                    <div className={styles.textBox}>
                        <p>
                            Welcome to my tiny corner of the internet where I'm
                            probably tinkering with random software and tools,
                            climbing up walls or buildings, or eating my way
                            through a city.
                        </p>
                    </div>
                </div>
                <div
                    className={styles.tabletDiv}
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="50"
                >
                    <img
                        src={cabin}
                        alt="photo of me"
                        className={styles.photo}
                    />
                </div>
            </div>

            <Footer />
        </div>
    );
}
