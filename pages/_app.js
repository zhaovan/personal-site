import '../styles/globals.css';
import { useEffect } from 'react';
import 'react-vertical-timeline-component/style.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
