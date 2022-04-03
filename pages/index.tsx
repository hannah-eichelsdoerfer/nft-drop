import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>NFT DROP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1 className="text-4xl font-bold text-red-500">
          Welcome to the NFT DROP CHALLENGE
        </h1>
      </main>

      <footer className=""></footer>
    </div>
  )
}

export default Home
