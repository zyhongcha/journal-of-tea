
import { fetchAPI } from "../lib/api"
import { md } from '../utils/markdownParser'
import { theme } from "../utils/theme-styles"
import { device } from "../lib/media"
import styled from 'styled-components'

const Content = styled.div`
  font-size: 1.2rem;
  /* font-family: "Georgia"; */
`





const About = ( {aboutPage} ) => {

    return (
        <>
      <h1>About Page</h1>
      <p>{aboutPage.title}</p>

      <Content dangerouslySetInnerHTML={{ __html: md.render(aboutPage.content) }} />

    </>
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