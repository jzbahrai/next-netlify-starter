import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function p1eng() {
  // Define your activity data
  const recentActivity = [
    "Applied to receive Old Age Security",
    "Visited a friend in the United States",
    "Listed my house for sale"
  ];

  const currentActivity = [
    "Selling the house",
    "Moving out of Canada",
    "Moving to the United States",
    "My retirement party",
    "Things I want to try",
    "Possible jobs I want to try",
    "Keep in touch with colleagues"
  ];

  const futureActivity = [
    "Apply for a work visa in the United States",
    "Change my address"
  ];

  return (
    <div className="container">
      <Head>
        <title>Bev's Personal Status Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Bev" />
        
        <section>
          <Header title="Recent activity" />
          <ul>
            {recentActivity.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </section>

        <section>
          <Header title="Current activity" />
          <ul>
            {currentActivity.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </section>

        <section>
          <Header title="In the Future" />
          <ul>
            {futureActivity.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  )
}
