import styled from 'styled-components'
import { theme } from "../utils/theme-styles"
import { fetchAPI } from "../lib/api"
import { md } from '../utils/markdownParser'

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

const Legal = ( {legalPage }) => {

    return (
      <Content dangerouslySetInnerHTML={{ __html: md.render(legalPage.content) }} />
        
    )
}
export default Legal


export const getStaticProps = async ({ params }) => {
    const legalPage = await fetchAPI(`/pages/604551d6a2bad74e0061351c`)
    
    return {
        props: {
            legalPage: legalPage
        }
    }
}