import Header from "../components/Header"
import { Content } from "../components/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Content>
    <Header />
    <Component {...pageProps} />
    </Content>
    </>
  ) 
  
}

export default MyApp
