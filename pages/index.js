import Head from 'next/head'
import dynamic from 'next/dynamic';
import 'tailwindcss/tailwind.css'

const BoardComponent = dynamic(() => import('../components/board'), { ssr: false });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Estimation Poker</title>
        <meta name="description" content="Simple app to do estimation poker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BoardComponent />
      </main>
    </div>
  )
}
