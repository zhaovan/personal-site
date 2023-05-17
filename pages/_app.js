import "../styles/globals.css";
import "../styles/projects.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";

import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";

import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Header from "../components/header";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  const location = useRouter();

  const pathArray = location.pathname.split("/");
  const currPage = location.query.slug
    ? location.query.slug
    : pathArray[pathArray.length - 1];

  const projectOrBlog = pathArray.length > 2;

  return (
    <>
      <DefaultSeo {...SEO} />
      <Header title={currPage} />
      <NavBar currPage={currPage} blogPost={projectOrBlog} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
