import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function Prompt() {
  return (
    <div className="container">
      <Head>
        <title>Bev's Government Helper!</title>
        <link rel="icon" hr ef="/favicon.ico" />
      </Head>

      <Header
        left={<h1>Bev</h1>}
        right={<p>Windy 11°</p>}
      />

      <main>
        <h1>How can I help you?</h1>
        <input type="text" />
        <Link href="/p1eng">Go</Link>
      </main >

      <Footer />
    </div >
  )
}
