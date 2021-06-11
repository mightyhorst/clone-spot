import Link from 'next/link'
import Layout from '../components/Layout'
import 'reset-css';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Make money now 💰💰💰💰💰💰💰💰💰💰💰💰💰💰💰💰💰</h1>
    <p>
      <Link href="/about">
        <a>fuck bitches later but also now</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
