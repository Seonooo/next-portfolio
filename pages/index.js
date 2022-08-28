import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Next 공부</title>
        <meta name="description" content="Next 공부" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>메인 홈</h1>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </Layout>
  )
}
