
import { fetchAPI } from "../lib/api"
import { md } from '../utils/markdownParser'
import { theme } from "../utils/theme-styles"
import { device } from "../lib/media"
import styled from 'styled-components'
import { sansSerifFont, serifFont } from "../utils/fonts"

const Container = styled.div`
  max-width: ${theme.articlePageWidth};
margin: calc(2*${theme.gap}) auto;
font-family: ${serifFont};
`


const Banner = styled.div`
  position: relative;
`

const Content = styled.div`
  font-size: 1.2rem;
  p {
    padding-top: ${theme.gap};
  }
  h3 {
    margin-top: calc(2.5*${theme.gap});
  }
  em {
    text-align: center;
  }
`

const BannerImg = styled.div`
background: linear-gradient(rgba(255,255,255, 0.8), rgba(255,255,255,0.6)), url('https://zyhong2021-assets.s3.eu-central-1.amazonaws.com/ZYL_03658_scaled_5e59d1da8d_6f4c5b2475.jpg');
background-size: cover;
background-position: center;
width: 100%;
min-height: 300px;
display: flex;
justify-content: center;
`
const BannerText = styled.h1`
  margin: auto;
  text-align: center;
  font-weight: 300;
  font-size: 2rem;
  font-family: ${sansSerifFont};
  font-style: italic;
`




const About = ( {aboutPage} ) => {

    return (
        <Container>

         <Banner>
         <BannerImg>
  <BannerText>Brewing tea with science</BannerText>
  </BannerImg>
         </Banner>
      <Content dangerouslySetInnerHTML={{ __html: md.render(aboutPage.content) }} />
    
    </Container>
     )


     
}


export const getStaticProps = async ({ params }) => {
    const aboutPage = await fetchAPI(`/pages/60044e17915e5b3f382da05d`)
    
    return {
        props: {
            aboutPage: aboutPage
        }
    }
}





export default About