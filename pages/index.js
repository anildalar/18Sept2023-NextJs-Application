//1. Import Area
import Head from 'next/head'
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
      <header>
          Header Component2
      </header>
      <main>
          <aside>Aside Compoent2</aside>
          <section>Section Component2</section>
      </main>
      <footer>
        Footer Component2
      </footer>
    </>
  )
}


//3. Export Area
export default Home;