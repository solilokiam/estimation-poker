import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Estimation Poker</title>
        <meta name="description" content="Simple app to do estimation poker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <Image src="/poker.svg" width={200} height={200} alt="Poker Player" />
                </div>
                <div className="mb-8">
                    <h2 className ="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Let&apos;s Estimate Some Tickets
                    </h2>
                </div>
                <div className="text-center">
                <Link href="/room/new">
                  <a className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Start new session</a>
                </Link>
                </div>
            </div>
        </div>
      </main>
    </div>
  )
}
