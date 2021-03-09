import styled from "styled-components"
import { theme, themeNavLinks } from "../utils/theme-styles"
import { device } from "../lib/media"
import Image from "./Image"
import Link from "next/link"

const Container = styled.div`
  border-top: 1px solid #ddd;
  padding-top: calc(2 * ${theme.gap});
  margin: calc(6 * ${theme.gap}) 0;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    margin: auto 0;

    &:first-of-type {
      padding-right: 12px;
    }
    &:last-of-type {
      padding-left: 12px;
    }
  }
`

const LinkWrapper = styled.div`
  max-width: 30ch;
  align-self: center;
  margin: ${(props) => (props.right ? "0 0 0 auto" : "0 auto 0 0")};
  text-align: ${(props) => (props.right ? "right" : "left")};
  line-height: 1.5;
  a {
    font-weight: 500;
    ${themeNavLinks(...[, ,], "1")}
  }

  @media ${device.mobile} {
    max-width: 35vw;
  }
`

const Title = styled.h4`
  ${themeNavLinks(...[, ,], "1")}
  margin:0;
  text-align: ${(props) => (props.right ? "right" : "left")};
`

const RelatedArticles = ({ relatedArticles }) => {
  const [nextArticle, prevArticle] = relatedArticles

  return (
    <Container>
      <Wrapper>
        {nextArticle && (
          <>
            <span>&lang;</span>
            <LinkWrapper>
              <Link href={`/article/${nextArticle.slug}`}>
                <a>{nextArticle.title}</a>
              </Link>
            </LinkWrapper>
          </>
        )}

        {prevArticle && (
          <>
            <LinkWrapper right="true">
              <Link href={`/article/${prevArticle.slug}`}>
                <a right="true">{prevArticle.title}</a>
              </Link>
            </LinkWrapper>
            <span>&rang;</span>
          </>
        )}
      </Wrapper>
    </Container>
  )
}
export default RelatedArticles
