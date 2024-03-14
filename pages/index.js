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
      </main>

      <Footer />
    </div>
  )
}
