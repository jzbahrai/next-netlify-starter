import Head from 'next/head'
import Link from 'next/link'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Notify2050() {
  return (
    <div className="container">
      <Head>
        <title>Notify in 2050</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Notify in 2050" />
        
        <section>
          <header>
            <h2>Notify in 2050, is a Government adaptive AI tool that is the most reliable method of delivery to public recipients</h2>
          </header>
          <p>Notify becomes a layer in the many gov APIs. The APIs are accessible by everyone, from public to companies offering services.</p>
          <Link href="/p1eng">
            Next
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}
