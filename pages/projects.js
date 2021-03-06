import NavBar from '../components/navbar';
import shared from '../styles/Shared.module.css';
import Footer from '../components/footer';
import Head from 'next/head';
import styles from '../styles/Projects.module.css';

const projects = [
  {
    name: 'CSV Upload',
    description:
      'CSV Upload tool using Iggy API to enrich spreadsheet files with location enrichment.',
    website: 'https://csv-upload.askiggy.com/',
    tags: ['development', 'design']
  },
  {
    name: 'Prism Investor Track',
    description:
      'An LGBTQ+ focused diversity track through Dorm Room Fund giving students an opportunity to learn about the world of venture and investing!',
    website: 'https://prism.dormroomfund.com',
    tags: ['diversity']
  },
  {
    name: 'Roll Call',
    description:
      'A mobile app built in React Native on PostgreSQL and Express for users to create a voting plan for the upcoming 2020 election.',
    website: 'https://rollcall.vote/',
    tags: ['product', 'development']
  },
  {
    name: 'Lunch Meet',
    description:
      'A lightweight video calling app made for IvyHacks that allows users to randomly find other working professionals, students, and people who want to chat with someone during their lunch break.',
    website: 'https://lunchmeat.herokuapp.com/',
    tags: ['design', 'development']
  },
  {
    name: 'Staying Informed Just to Feel Something',
    description:
      'A web app that allows users to search for tweets that are either hot topics or trends. Tweets are returned with a truth and sentiment score attached after running through a CNN model ',
    website: 'https://github.com/zhaovan/twitter-hackathon',
    tags: ['design', 'development']
  },
  {
    name: 'Tarrey Town Audio',
    description:
      'A lightweight audio player experience to replicate the side quest from Legend of Zelda: Breath of the Wild. ',
    website: 'https://zhaovan.github.io/tarrey-town/',
    tags: ['development']
  },
  {
    name: 'Optical Music Recognition',
    description:
      'Python script for reading sheet music images and converting them to MIDI file using bounding boxes, feature detection, and a CNN',
    website: 'https://github.com/zhaovan/optical-music-recognition',
    tags: ['classwork', 'development']
  },
  {
    name: 'Rhyme Time',
    description:
      'Python script that webscrapes, preprocesses, parses, and then, using a LSTM model, generates limericks',
    website: 'https://github.com/zhaovan/lstm-rhyme-time',
    tags: ['classwork', 'development']
  },
  {
    name: 'Communify',
    description:
      'Mockup in Adobe XD for an iPad app for kids to learn about the coronavirus for Nick x Adobe Creative Jam',
    website:
      'https://xd.adobe.com/view/2f06327c-4cd1-408c-7c38-64d3b967668e-5937/',
    tags: ['product', 'development']
  },
  {
    name: 'Wander',
    description:
      "A mobile app built in React Native and Firebase that serves as an aggregator for users to build and search for itineraries. Made during Hack Lodge '18",
    website: 'https://github.com/zhaovan/wander',
    tags: ['design', 'development']
  },
  {
    name: "Seattle's Startup Ecosystem",
    description:
      'Full-year reasearch project on social variables that contributed to tech entrepreneurship in the Greater Seattle Area',
    website: '/research_paper.pdf',
    tags: ['research']
  }
];

export default function Projects() {
  return (
    <div className={shared.page}>
      <Head>
        <title>Projects</title>
        <link rel='icon' href='/icon.ico' />
      </Head>
      <NavBar currPage='projects' />

      <p className={shared.titleText}>Projects!</p>
      <div className={shared.container} style={{ flexDirection: 'column' }}>
        <div className={shared.firstText}>
          I sometimes work on things. Here's a couple of them that (sort of)
          turned out.
        </div>

        <div className={styles.projectContainer}>
          {projects.map((project, i) => {
            return (
              <div className={styles.project} data-aos='fade-up'>
                <div className={styles.name}>
                  <a href={project.website} target='_blank'>
                    {project.name}
                  </a>
                </div>
                <div style={{ marginBottom: '3%' }}>
                  {project.tags.map((tag) => {
                    const currStyle =
                      tag == 'product'
                        ? styles.product
                        : tag == 'design'
                        ? styles.design
                        : tag == 'research'
                        ? styles.research
                        : tag == 'classwork'
                        ? styles.classwork
                        : styles.dev;
                    return (
                      <div className={[currStyle, styles.resumeTag].join(' ')}>
                        {tag}
                      </div>
                    );
                  })}
                </div>

                <div>
                  <div className={styles.description}>
                    {project.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}
