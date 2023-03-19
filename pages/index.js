import Head from 'next/head'
import BaseLayout from '../components/layout/BaseLayout.js'

// This page will contain only the latest offer

export default function Home({latestOffer}) {
  return (
    <>
      {/* Fields to optimize the SEO */}
      <Head>
        <title>Offer Page</title>
        <meta name="description" content="Assingment Project for Offer Display" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BaseLayout offerDetails={latestOffer.offer}/>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.BASE_URL_DEV}/offer/get/latest`)
  const latestOffer = await res.json()


  return {
    props: {
      latestOffer
    },
    revalidate: 1
  }
}
