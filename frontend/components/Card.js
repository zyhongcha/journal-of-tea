import styled from 'styled-components'
import Image from './Image'
import Link from 'next/link'
import { theme } from '../utils/theme-styles'
import { device } from '../lib/media'
import Categories from './Categories'

const Container = styled.article`
    flex: 1 0 calc(33.33% - 2*${theme.gap}); // used calc to consider the gaps, otherwise one row would show 2 cards instead of 3 because of overflow wrapping
    /* margin: calc(2*${theme.gap}) ${theme.gap}; */
    display: flex;
    flex-direction: column;
    background: ${theme.white};
    box-shadow: 0px 1.3px 3.4px rgba(0,0,0,0.13), 0px 0px 3.2px rgba(0,0,0,0.11);
    border-radius: 5px;




    @media ${device.tablet} {
        /* flex: 1 0 calc(50% - 2*${theme.gap});  */
        /* margin: ${theme.gap} calc(${theme.gap}/2); */
    
    }

    @media ${device.mobile} {
        flex: 1 0 100%;
        margin: ${theme.gap} 0;
    }

`

const InnerWrapper = styled.div`
    padding: ${theme.gap};

` 

const Excerpt = styled.p`
    color: ${theme.textMain};
    font-size: 0.9em;
`

const ImgWrapper = styled.a`
    --aspect-ratio: 2;
`

const Img = styled(Image)`
    height: 220px;
    object-fit: cover;
    cursor: pointer;
    
    &:hover {
        opacity: 0.8;
        transition: opacity 130ms ease-out;
    }

    @media ${device.mobile} {
    }

`

const InnerLink = styled.h3`
    &:hover {
        text-decoration: underline;
    }
`


function Card ({ article }) { 


    

    return (
        <Container>
        <Link href={`/article/${article.slug}`}>
        <ImgWrapper>
        <Img imageObj={article.thumbnail}/>
        </ImgWrapper>
        </Link>
        <InnerWrapper>
        
        <Categories categoryList={article.categories}/>
        <Link href={`/article/${article.slug}`}><a>
        <InnerLink>{article.title}</InnerLink>
        </a>
        </Link>
        <Excerpt>{article.excerpt}</Excerpt>
        </InnerWrapper>
        </Container>
    )

}

export default Card