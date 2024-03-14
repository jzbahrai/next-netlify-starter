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
        <Header title="Welcome Bev!" />
        <p className="description">
          How can I help you? <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
