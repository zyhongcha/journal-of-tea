import styled from "styled-components"
import Categories from './Categories'
import { theme } from "../utils/theme-styles"


const MetaWrapper = styled.div`
    text-align: center;
    p {
      color: ${theme.textLighter}
    }

    h1 {
      font-weight: 300;
      margin: calc(2 * ${theme.gap}) 0;
    }
`

const TopLine = styled.div`
`

const ArticleMeta = ({ metadata }) => {
  return (
    <MetaWrapper>
      <Categories categoryList={metadata.categories} />
      <p>{new Date(metadata.published).toLocaleDateString('en-GB', {year: "numeric",month: "short", day: 'numeric' }) }</p>
      <h1>{metadata.title}</h1>
    </MetaWrapper>
  )
}

export default ArticleMeta
