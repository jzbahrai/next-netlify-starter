import Head from "next/head";
import Footer from "@components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Notify in 2050</title>
      </Head>
      <main>
        <section>
          <div>
            <h1>
              Notify in 2050, is a Government adaptive API tool that is the most
              reliable method of delivery to public recipients
            </h1>
            <p>
              Notify becomes a layer in the many gov APIs. The APIs are
              accessible by everyone, from public servants to individuals to
              companies offering services.
            </p>
          </div>
          <Image src="svgs/shape-a.svg" fill className="bg-image" />
        </section>
        <section>
          <h2>What does the world look like in 2050?</h2>
          <card>
            <Image src="svgs/Pigeon.svg" width="135" height="75" />
            <cardbody>
              <h3>Government is mostly the same</h3>
              <p>
                Government is mostly the same, but there is this API that third
                parties can connect to in between people and gov. As a result of
                these APIs, many third party services allow you to interact with
                government.
              </p>
            </cardbody>
          </card>
          <card>
            <cardbody>
              <h3>Frustration with gov process.</h3>
              <p>
                Government and the public decided to embrace customized third
                party services to interact with government. This really shifted
                the trust struggles.
              </p>
            </cardbody>
            <Image src="svgs/Void.svg" width="135" height="75" />
          </card>
          <card>
            <Image src="svgs/Flower.svg" width="135" height="75" />
            <cardbody>
              <h3>Digicare is a basic universal tech program.</h3>
              <p>
                To address the digital divide, the government is able to provide
                people and communities with technology. Its not the latest and
                greatest, but it does the job.
              </p>
            </cardbody>
          </card>
          <card>
            <cardbody>
              <h3>Medium tech are more competitive overall.</h3>
              <p>
                Policy and big tech are in better terms over state policy
                preferences. After struggling with news platform revenue
                sharing, Big tech companies decided to be more open and comply
                with government around the globe. However, this created an
                opening for medium sized tech companies who are able to be more
                profitable in different regions of the world.
              </p>
            </cardbody>
            <Image src="svgs/Truck.svg" width="135" height="75" />
          </card>
        </section>
        <section>
          <Image src="svgs/shape-b.svg" fill className="bg-image" />
          <div>
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
          </div>
        </section>

        <section>
          <div>
            <h2>How does Notify help you in 2050?</h2>
            <ul>
              <li>It can speak your language</li>
              <li>It knows everything about government</li>
              <li>It can ask you for more personalized information</li>
              <li>It knows how to work government process</li>
              <li>
                It documents your steps through services and programs, so you
                can remember
              </li>
              <li>It is patient</li>
              <li>It does the work for you</li>
              <li>
                For things that it can't do, it makes it as easy as possible
              </li>
              <li>It gives you options</li>
              <li>It offers you service that you might not know</li>
              <li>It is automatically seamless and customized to you</li>
              <li>
                It automatically evolves and adapts over time based on your
                needs
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2>Meet Bev</h2>
          <split>
            <p>
              Bev is a veteran of the Royal Canadian Navy, who is 42, and is
              newly retired from the military
            </p>
            <Image src="/bev/bev.png" width="300" height="350" />
          </split>
          <div
            style={{
              position: "relative",
              padding: 80,
              paddingBottom: 180,
              marginTop: -150,
              fontSize: "var(--font-size-large)",
            }}
          >
            <p>
              A while back, Bev asked Devin, a software engineering AI to come
              up with a tool to help navigate life events and the government.
              Devin used Notify 2050 to fulfil Bev’s request
            </p>
            <Image src="/svgs/shape-c.svg" fill style={{ zIndex: -9 }} />
          </div>
          <split style={{ marginTop: -150 }}>
            <Image
              src="/bev/computer.png"
              width="400"
              height="260"
              style={{ zIndex: -19 }}
            />
            <div>
              <p>
                This tool runs on Bev’s computer, so she can keep her data
                secure. This is nothing fancy compared to other tech that exists
                in 2050.
              </p>
              <p>
                Now that they are retired, they are selling their house and
                moving to Florida. Lets see how she is able to interact with
                government...
              </p>
            </div>
          </split>
        </section>
        <section className="interface">
          <figure>
            <Image
              src="/bev/Home.svg"
              width="602"
              height="432"
              alt="An interface with a big prompt input box, three lists for recent current and possible tasks to be completed. This seems like a home screen or a dashboard that someone would use to organize their life events"
            />
            <figcaption>
              Bev was able to create a customized, home-made tool using software
              engineering AI. The AI was able to pull in many different APIs,
              including the GC Notify API to connect many services together. Not
              only can it help Bev navigate government processes, it also
              extends to other services.
            </figcaption>
          </figure>
        </section>
        <section className="interface">
          <figure>
            <Image
              src="/bev/Task.svg"
              width="602"
              height="432"
              alt="An event named Selling the house. In this event, there are things to be done by the user, and things that have been done by an A. I. assistant."
            />
            <figcaption>
              One of the views of Bev's tool is a detailed task list for bigger
              life events. Bev needed to sell her house. Her tool was able to
              find important steps to do. It was even able to complete some of
              them, but delegate the one's it was not able to complete.
            </figcaption>
          </figure>
        </section>
      </main>

      <Footer />
    </div>
  );
}
