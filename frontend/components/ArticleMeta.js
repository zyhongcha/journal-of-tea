import styled from "styled-components"
import Categories from "./Categories"
import { theme } from "../utils/theme-styles"
import { sansSerifFont } from "../utils/fonts"
import { device } from '../lib/media'

const MetaWrapper = styled.div`
  text-align: center;
  font-family: ${sansSerifFont};

  p {
    color: ${theme.textLighter};
  }

  h1 {
    margin: calc(2 * ${theme.gap}) 0;
    line-height: 1.6;
  }

  @media ${device.mobile} {
    h1 {
      line-height: initial;
    margin: ${theme.gap} 0;
    font-size: 2rem;

    }
  }
`

const TopLine = styled.div``

const ArticleMeta = ({ metadata }) => {
  return (
    <MetaWrapper>
      <Categories categoryList={metadata.categories} />
      <p>
        {new Date(metadata.published).toLocaleDateString("en-GB", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>
      <h1>{metadata.title}</h1>
    </MetaWrapper>
  )
}

export default ArticleMeta
