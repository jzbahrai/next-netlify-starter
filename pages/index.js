import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Bev's Government Helper!</title>
        <link rel="icon" hr ef="/favicon.ico" />
      </Head>

      <main>
        <Header
          left={<h1>Bev</h1>}
          right={<p>Weather goes here</p>}
        />
        <div class='container'>
          <h1>How can I help you?</h1>
          <input type="text" />
        </div>
      </main >

      <Footer />
    </div >
  )
}
