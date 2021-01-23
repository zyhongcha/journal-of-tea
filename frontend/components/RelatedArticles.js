import styled from 'styled-components'
import { theme, themeNavLinks} from "../utils/theme-styles"
import { device } from "../lib/media"
import Image from './Image'
import Link from "next/link"


const Container = styled.div`
    border-top: 1px solid #ddd;
    padding-top: calc(2*${theme.gap});
    margin: calc(4* ${theme.gap}) 0 ;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`


const LinkWrapper = styled.div`
    max-width: 30ch;
    align-self: center;
    a {        
        font-weight: bold;
        ${themeNavLinks(...[, ,], "1")}
    }  
    span {
        padding: 0 12px;
    }

    @media ${device.mobile} {
        max-width: 40vw;
    }
`


const Title = styled.h4`
    ${themeNavLinks(...[, ,], "1")}
    margin:0;
    text-align: ${props => props.right ? "right" : "left"};

`


const RelatedArticles = ( { relatedArticles } ) => {

    const [nextArticle, prevArticle] = relatedArticles

    return (
        <Container>
        <Wrapper>
            
            {prevArticle && <LinkWrapper >
                <span>&lang;</span>
            <Link href={`/article/${prevArticle.slug}`}>
                <a>{prevArticle.title}</a>
            </Link>
            </LinkWrapper>
            }
            {nextArticle && 
            <LinkWrapper >
            <Link href={`/article/${nextArticle.slug}`}>
                <a>
            {nextArticle.title}
            </a>
            </Link>
            <span>&rang;</span>
            </LinkWrapper>
            }

        </Wrapper>
        </Container>


    )
}
export default RelatedArticles