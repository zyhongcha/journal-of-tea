import styled from 'styled-components'
import Image from './Image'
import Link from 'next/link'
import { theme } from '../utils/theme-styles'
import { device } from '../lib/media'
import Categories from './Categories'

const Container = styled.article`
    flex: 0 1 calc(33.33% - 2*${theme.gap}); // used calc to consider the gaps, otherwise one row would show 2 cards instead of 3 because of overflow wrapping
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    border: 1px solid #dfdfdf;

    @media ${device.mobile} {
        flex: 1 0 100%;
        margin: ${theme.gap} 0;
    }

`

const InnerWrapper = styled.div`
    padding: ${theme.gap};
    background: ${theme.white};


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
    border-radius: 3px 3px 0 0;
    
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