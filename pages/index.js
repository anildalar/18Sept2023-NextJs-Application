//1. Import Area
import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';
import Aside from '../components/Aside';
//Import something from 'some library/location';

// `pages/_app.js`
//Import 'some location';

//.2 Function defination area
function Home() {
  return (
    <>
      <Head>
        <title>Welcome to my first Next Application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
          <Aside />
          <Section />
      </main>
      <Footer />
    </>
  )
}


//3. Export Area
export default Home;