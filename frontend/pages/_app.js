import Header from "../components/Header"
import Footer from "../components/Footer"
import { Layout, Content } from "../components/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    <Header />
    <Content>
    <Component {...pageProps} />
    </Content>
    <Footer />
    </Layout>
  ) 
  
}

export default MyApp
