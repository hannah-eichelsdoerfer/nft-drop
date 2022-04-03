import Head from 'next/head'
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'

const NFTSDropPage = () => {
  // Auth
  const connectWithMetaMask = useMetamask()
  const address = useAddress()
  const disconnect = useDisconnect()

  return (
    <>
      {' '}
      <Head>
        <title>Cool Apes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
        <div className="bg-gradient-to-br from-purple-400 to-yellow-300 lg:col-span-4">
          <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
            <div className="rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 p-2">
              <img
                src="https://links.papareact.com/8sg"
                alt=""
                className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
              />
            </div>
            <div className="space-y-2 p-5 text-center">
              <h1 className="text-4xl font-bold text-white">Cool Apes</h1>
              <h2 className="test-xl text-white">
                A collection of Apes who live and breathe React
              </h2>
            </div>
          </div>
        </div>

        <div className="py-8 px-12 lg:col-span-6">
          <header className="flex items-center justify-between">
            <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
              <span className="font-extrabold underline decoration-purple-400/50">
                NFT
              </span>{' '}
              Market Place
            </h1>
            <button
              onClick={() => (address ? disconnect() : connectWithMetaMask())}
              className="rounded-full bg-yellow-400 px-4 py-2 text-xs font-bold text-white lg:px-5 lg:py-3 lg:text-base"
            >
              {address ? 'Sign Out' : 'Sign In'}
            </button>
          </header>
          {address && (
            <p className="text-center text-sm text-purple-400/50">
              You're logged in with wallet {address.substring(0, 5)}...
              {address.substring(address.length - 5)}
            </p>
          )}

          <hr className="my-2 border" />

          <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:justify-center lg:space-y-0">
            <img
              className="w-80 object-cover pb-10 lg:h-40"
              src="https://links.papareact.com/bdy"
              alt=""
            />
            <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
              The Ape Coding Club | NFT Drop
            </h1>
            <p className="pt-2 text-xl text-yellow-500/50">
              13 / 21 NFT's clamied
            </p>
          </div>

          <button className="mt-10 h-16 w-full rounded-full bg-purple-400/50 font-bold text-white">
            Mint NFT (0.01 ETH)
          </button>
        </div>
      </div>
    </>
  )
}
export default NFTSDropPage
