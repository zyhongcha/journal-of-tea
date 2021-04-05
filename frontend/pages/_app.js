import Header from "../components/Header"
import Footer from "../components/Footer"
import { Layout, Content } from "../components/Layout"
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <meta charSet="UTF-8" />
    <meta name="description" content="Discover and share your tea articles and stories around the world"></meta>
    <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=yes"
          />

    <meta name="robots" content="index, follow" />
    <meta property="og:title" content="Journal of Tea" key="ogtitle" />
    <meta property="og:description" content="Discover and share your tea articles and stories around the world" key="ogdesc" />
    <meta property="og:url" content="www.journaloftea.org" key="ogurl" />
    <meta property="og:site_name" content="Journal of Tea" key="ogsitename" />
    <link rel="canonical" href="https://www.journaloftea.org/" />
    <title>Journal of Tea</title>
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
