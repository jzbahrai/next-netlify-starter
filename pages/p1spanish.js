import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function p1spanish() {
  // Define your activity data in Spanish
  const recentActivity = [
    "Solicita la Seguridad de Vejez",
    "Visitar a un amigo en Estados Unidos",
    "Puse mi casa en venta"
  ];

  const currentActivity = [
    "Vender la casa",
    "Me mudo de Canadá",
    "Mudanza a Estados Unidos",
    "Mi fiesta de jubilación",
    "Cosas que quiero probar",
    "Posibles trabajos que quiero probar",
    "Mantener el contacto con los colegas"
  ];

  const futureActivity = [
    "Solicitar un visado de trabajo en Estados Unidos",
    "Cambiar de dirección"
  ];

  return (
    <div className="container">
      <Head>
        <title>Página de estado personal de Bev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        left={<h1>Bev</h1>}
        right={<p>Windy 11°</p>}
      />

      <main>
        <section>
          <h1>Actividad reciente</h1>
          <ul>
            {recentActivity.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </section>

        <section>
          <h1>Actividad actual</h1>
          <ul>
            {currentActivity.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </section>

        <section>
          <h1>En el futuro</h1>
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
