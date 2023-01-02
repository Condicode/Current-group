import Head from 'next/head'
import About from '../components/About'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import Gallerly from '../components/Gallerly'
import Hero from '../components/Hero'
import Mission from '../components/Mission'
import Nav from '../components/Nav'
import Services from '../components/Services'
import Work from '../components/Work'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Current Group Company Limited</title>
        <meta name="description" content="Current Group Company Limited official website" />
        <link rel="icon" href="/logo2.png" />
      </Head>

      <Nav />
      <Hero />
      <About />
      <Mission />
      <Services />
      <Work />
      <Gallerly />
      <CTA />
      <Footer />
    </div>
  )
}
