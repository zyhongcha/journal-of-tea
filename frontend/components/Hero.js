import styled from "styled-components"
import { theme, themeNavLinks } from "../utils/theme-styles"
import { device } from "../lib/media"
import { serifFont, sansSerifFont } from "../utils/fonts"
import Link from "next/link"

const HeroWrapper = styled.div.attrs((props) => ({
  image: props.image,
}))`
  position: relative;
  height: 512px;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    url(${(props) => props.image});
  background-size: cover;
  background-position: center center;
  border-radius: 5px;
  @media ${device.mobile} {
    margin: 0 0 ${theme.gap};
    height: 360px;
  }
`

const InnerHeroSection = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0.5rem 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ArticleCategory = styled.a`
  color: ${theme.white};
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 300;
  padding-top: 1rem;
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

  @media ${device.notMobile} {
    ${themeNavLinks(theme.white, theme.accent)};
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
              <Link href={firstArticle.categories[0].slug}>
                <a>{firstArticle.categories[0].category_name}</a>
              </Link>
            </ArticleCategory>
            <ArticleTitle>
              <Link href={firstArticle.slug}>
                <a>
                  <Cta>
                    Read more &raquo;
                    <br />
                  </Cta>
                  {firstArticle.title}
                </a>
              </Link>
            </ArticleTitle>
          </InnerHeroSection>
        </HeroWrapper>
      ) : null}
    </>
  )
}

export default Hero
