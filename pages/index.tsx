import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from './components/Layout'
import '../styles/MainNavigation.module.scss'

const IndexPage: NextPage = () => {
  return(
    <Layout title={`ダッシュボード`}>
      <h1>ダッシュボード</h1>
      <ul>
        <li>
          
        </li>
      </ul>
    </Layout>
  )
}

export default IndexPage
