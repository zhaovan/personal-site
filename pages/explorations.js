import React from "react";
import Header from "../components/header";
import NavBar from "../components/navbar";
import Image from "next/image";

import shared from "../styles/Shared.module.css";

const work = [
  {
    path: "/art/cat.png",
  },
];

export default function Explorations() {
  return (
    <div>
      <Header title={"Explorations"} />
      <NavBar />

      <h1 className={shared.titleText}>Explorations!</h1>
      <p className={shared.firstText}>
        Here's a miscellany of things I've done, mostly for fun (mostly visual
        work)
      </p>
      {work.map((item) => {
        return <Image src={item.path} width={400} height={400} />;
      })}
    </div>
  );
}
