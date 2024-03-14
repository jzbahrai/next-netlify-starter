import Head from 'next/head'
import Link from 'next/link'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function world2050() {
  return (
    <div className="container">
      <Head>
        <title>World in 2050</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="What does the world look like in 2050?" />
        
        <section>
          <header>
            <h2>Government is mostly the same</h2>
          </header>
          <p>Government is mostly the same, but there is this API that third parties can connect to in between people and gov. As a result of these APIs, many third party services allow you to interact with government.</p>
          <header>
            <h2>Frustration with gov process.</h2>
          </header>
          <p>Government and the public decided to embrace customized third party services to interact with government. this really shifted the trust struggles.</p>
          <header>
            <h2>Digicare is a basic universal tech program.</h2>
          </header>
          <p>To address the digital divide, the government is able to provide people and communities with technology. Its not the latest and greatest, but it does the job.</p>
          <header>
            <h2>Medium tech companies are more competitive overall.</h2>
          </header>
          <p>Policy and big tech are in better terms over state policy preferences. After struggling with news platform revenue sharing, Big tech companies decided to be more open and comply with government around the globe. However, this created an opening for medium sized tech companies who are able to be more profitable in different regions of the world. </p>
          
          <Link href="/p1eng">
            Next
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}
