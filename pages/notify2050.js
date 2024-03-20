import Head from 'next/head'
import Link from "next/link";
import Footer from "@components/Footer";
import { MaskSad } from "@phosphor-icons/react";

export default function Notify2050() {
  return (
    <div className="container">
      <Head>
        <title>Notify in 2050</title>
      </Head>
      <main>
        <section>
          <h1>
            Notify in 2050, is a Government adaptive AI tool that is the most
            reliable method of delivery to public recipients
          </h1>
          <p>
            Notify becomes a layer in the many gov APIs. The APIs are accessible
            by everyone, from public servants to individuals to companies
            offering services.
          </p>
          <Link href="/p1eng">Next</Link>
        </section>
        <section>
          <h2>What does the world look like in 2050?</h2>
          <card>
            <MaskSad size={72} weight="thin" />
            <h3>Government is mostly the same</h3>
            <p>
              Government is mostly the same, but there is this API that third
              parties can connect to in between people and gov. As a result of
              these APIs, many third party services allow you to interact with
              government.
            </p>
          </card>
        </section>
        <section>
          <h2>So, what is Notify in 2050?</h2>
          <p>
            It is a collection of all the APIs from the government, adapted to
            communicate information with the public
          </p>
          <ul>
            <li>Public servants can communicate with recipients </li>
            <li>Services can communicate with other services </li>
            <li>Recipients can communicate with services </li>
            <li>Recipients can communicate with public servants</li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
