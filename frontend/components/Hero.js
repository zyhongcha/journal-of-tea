import styled from "styled-components"
import { theme, themeNavLinks } from "../utils/theme-styles"
import { device } from "../lib/media"
import { sansSerifFont } from "../utils/fonts"
import Link from "next/link"

const HeroWrapper = styled.div.attrs((props) => ({
  image: props.image,
}))`
  position: relative;
  height: 512px;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.6) 100%
    ), linear-gradient(
      128deg,
      rgba(0, 0, 0, 0.75) 0%,
      rgba(255, 255, 255, 0) 20%
    ),
    url(${(props) => props.image});
  background-size: cover;
  background-position: center center;
  border-radius: 5px;
  @media ${device.mobile} {
    margin: 0 0 ${theme.gap};
    height: 420px;
    background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6) 100%,
      rgba(255, 255, 255, 0) 100%
    ),
    url(${(props) => props.image});
  }
`

const InnerHeroSection = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;   
  padding: 2rem 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ArticleCategory = styled.span`
  color: ${theme.white};
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 0.1em;
  width: fit-content;
  ${themeNavLinks(theme.white, theme.accent)};
`

const ArticleTitle = styled.h2`
  font-size: 2rem;
  font-style: italic;
  font-weight: 300;
  letter-spacing: 0.03em;
  font-family: ${sansSerifFont};
  color: ${theme.white};
  margin: 0;
  @media ${device.notMobile} {
    ${themeNavLinks(theme.white, theme.accent)};
  transition: none!important;
  }

  @media ${device.mobile} {
    font-size: 1.6rem;
  }
`

const Cta = styled.span`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 0.08em;

  @media ${device.mobile} {
    text-decoration: underline #f8f8f8;
  }
`

const Hero = ({ firstArticle }) => {
  return (
    <>
      {firstArticle ? (
        <HeroWrapper image={firstArticle.thumbnail.formats.large.url}>
          <InnerHeroSection>
            <ArticleCategory>
              <Link href={`/${firstArticle.categories[0].slug}`}>
                <a>{firstArticle.categories[0].category_name}</a>
              </Link>
            </ArticleCategory>
              <Link href={`/article/${firstArticle.slug}`}>
                <a>
            <ArticleTitle>
                  <Cta>
                    Read more &raquo;
                    <br />
                  </Cta>
                  {firstArticle.title}
            </ArticleTitle>
                </a>
              </Link>
          </InnerHeroSection>
        </HeroWrapper>
      ) : null}
    </>
  )
}

export default Hero
