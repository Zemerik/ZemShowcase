import Head from 'next/head'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'

export default function Contacts() {
  return (
    <>
      <Head>
        <title>ZemShowcase - Add New Project</title>
        <meta
          name="description"
          content="Add your project"
        />
        <meta property="og:title" content="Add New Project" />
        <meta
          property="og:description"
          content="Add you project"
        />

        
      </Head>

      <ScrollTop />

      <Footer />
    </>
  )
}
