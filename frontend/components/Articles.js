import Card from "./Card"
import styled from "styled-components"
import { theme } from "../utils/theme-styles"
import Hero from "./Hero"
import { device } from '../lib/media'


const ArticleContainer = styled.div`
flex: 1;
margin-top: calc(4*${theme.gap});
 /* margin: 0　calc(-1 * ${theme.gap}); // minus the initial gap */
 /* margin: 0 ${theme.gap}; */
 /* max-width: 1366px; // 1366px is the second most common device width in 2020 */
 @media ${device.mobile} {
 margin: auto;
 }
`

 
 const Grid = styled.section`
   display: flex;
   gap: calc( 2*${theme.gap});
   justify-content: center;
   flex-wrap: wrap;
 `

 const Articles = ( {articles} ) => {

    return (
        <>
    <Hero firstArticle={articles[0]} />
    <ArticleContainer>
      <Grid>
        {articles.map((article, key) => {
            return key > 0 && key < 4 &&  (  // offset by 1 post 
                <Card key={key} article={article} />
                )
            })}

      </Grid>
    </ArticleContainer>
            </>
        )
 }

 export default Articles