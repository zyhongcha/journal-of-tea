import Header from "../components/Header"
import Footer from "../components/Footer"
import { Layout, Content } from "../components/Layout"
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <meta charset="UTF-8" />
    <meta name="description" content="Discover and share your tea articles and stories around the world"></meta>
    <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=yes"
          />

    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://www.journaloftea.org/" />
    </Head>
    <Layout>
    <Header />
    <Content>
    <Component {...pageProps} />
    </Content>
    <Footer />
    </Layout>
    </>
  ) 
  
}

export default MyApp
