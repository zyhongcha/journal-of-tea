import styled from 'styled-components'
import Link from 'next/link'
import { theme } from '../utils/theme-styles'
import { device } from '../lib/media'
import Categories from './Categories'
import { serifFont } from "../utils/fonts"


const Container = styled.article`
    flex: 0 1 calc(33.33% - 2*${theme.gap}); // used calc to consider the gaps, otherwise one row would show 2 cards instead of 3 because of overflow wrapping
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    border: 1px solid ${theme.bg};
    background: #fff;

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

const Img = styled.img`
    height: 220px;
    object-fit: cover;
    cursor: pointer;
    border-radius: 3px 3px 0 0;
    
    &:hover {
        opacity: 0.8;
        transition: opacity 130ms ease-out;
    }


`

const InnerLink = styled.h3`
    font-weight: 500;
    font-family: ${serifFont};
    &:hover {
        text-decoration: underline;
    }
`


function Card ({ article }) { 


    

    return (
        <Container>
        <Link href={`/article/${article.slug}`}>
        <ImgWrapper>
        <Img src={article.thumbnail.formats.small.url} decoding="async" loading="lazy" importance="low" width="369" />
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