import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Bev's Government Helper!</title>
        <link rel="icon" hr ef="/favicon.ico" />
      </Head>
      <div class='topbar'>
        <Header
          left={<h1>Bev</h1>}
          right={<p>Weather goes here</p>}
        />
      </div>
      <main>
        <h1>How can I help you?</h1>
        <input type="text" />
        <Link href="/p1eng">Go</Link>
      </main >

      <Footer />
    </div >
  )
}
