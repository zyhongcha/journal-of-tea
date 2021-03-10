import Header from "../components/Header"
import Footer from "../components/Footer"
import { Layout, Content } from "../components/Layout"
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=yes"
          />
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
