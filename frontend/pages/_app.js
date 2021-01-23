import Header from "../components/Header"
import { Layout, Content } from "../components/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    <Header />
    <Content>
    <Component {...pageProps} />
    </Content>
    </Layout>
  ) 
  
}

export default MyApp
