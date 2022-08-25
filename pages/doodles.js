import Header from "../components/header";
import NavBar from "../components/navbar";
import shared from "../styles/Shared.module.css";
import Image from "next/image";

//
import styles from "../styles/Doodles.module.css";
import images from "../data/doodles.js";

export default function Doodles() {
  return (
    <div className={shared.page}>
      <Header title={"Doodles"} />
      <NavBar currPage={"doodles"} />
      <p className={shared.titleText}>Doodles!</p>
      <div className={[shared.container, styles.container].join(" ")}>
        {images.map((image) => {
          return (
            <div className={styles.image}>
              <Image src={image} layout="fixed" height={300} width={300} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
