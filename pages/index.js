import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import TopBar from '@components/TopBar'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Bev's Government Helper!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TopBar
          leftItems={<h1>Bev</h1>}
          rightItems={<p>Weather goes here</p>}
        />
        <Header title="Welcome to my app!" />
        <h1>TEST</h1>
        <div class="container">

          <p>You're chilling</p>

          <div>
            <p>test</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
