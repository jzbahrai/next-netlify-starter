import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Bev's Government Helper!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
<<<<<<< Updated upstream
        <Header title="Welcome Bev!" />
        <p className="description">
          How can I help you? <code>pages/index.js</code>
        </p>
=======
        <bev>
          <h1>Bev</h1>
        </bev>
        <Header title="Welcome to my app!" />
        <h1>TEST</h1>
        <div class="container">

          <p>You're chilling</p>

          <div>
            <p>test</p>
          </div>
        </div>
>>>>>>> Stashed changes
      </main>

      <Footer />
    </div>
  )
}
