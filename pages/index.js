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
          Header Component
      </header>
      <main>
          <aside>Aside Compoent</aside>
          <section>Section Component</section>
      </main>
      <footer>
        Footer Component
      </footer>
    </>
  )
}


//3. Export Area
export default Home;