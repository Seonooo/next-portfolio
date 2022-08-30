import Layout from "../components/layout"
import Head from 'next/head'
import {TOKEN, DATABASE_ID} from '../config/index'
import ProjectItem from "../components/projects/project-image";

export default function Projects({projects}){
  return (
    <Layout >
      <div className="flex flex-col items-center justify-center min-h-screen mb-10 px-6">
        <Head>
            <title>Next 공부</title>
            <meta name="description" content="Next 공부" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-3xl text-center font-bold sm:text-6xl">
          총 프로젝트 :
          <span className="pl-4 text-blue-500">{projects.results.length}</span>
        </h1>
        <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2">
          {projects.results.map((project)=> <ProjectItem key={project.id} data={project}/>)}
        </div>
      </div>
    </Layout>
  )
}


export async function getStaticProps() {

  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Notion-Version': '2022-02-22',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`
    },
    body: JSON.stringify({
      sorts : [
        {
          "property": "Name",
          "direction":"ascending"
        }
      ],
        page_size: 100
    })
  };

  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)

  const projects = await res.json();

  return {
    props: {projects}, 
  }
}