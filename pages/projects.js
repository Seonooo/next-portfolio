import Layout from "../components/layout"
import Head from 'next/head'
import {TOKEN, DATABASE_ID} from '../config/index'

export default function Projects(){
    return (
        <Layout>
            <Head>
                <title>Next 공부</title>
                <meta name="description" content="Next 공부" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>프로젝트</h1>
        </Layout>
    )
}


export async function getStaticProps(context) {

    const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Notion-Version': '2022-06-28',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({page_size: 100})
      };
      
        const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);
        const result = await res.json();

        console.log(result);

    return {
      props: {}, // will be passed to the page component as props
    }
  }