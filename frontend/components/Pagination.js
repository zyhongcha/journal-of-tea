import styled from "styled-components"
import Link from "next/link"
import { theme, themeNavLinks } from "../utils/theme-styles"
import { device } from "../lib/media"

const Container = styled.div`
  border-top: 1px solid #ddd;
  padding-top: calc(2 * ${theme.gap});
  margin: calc(6 * ${theme.gap}) 0;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    padding: 0 8px;
    margin: auto 0;
  }

  a {
    ${themeNavLinks(...[, ,], "1")}
  }
`

const LinkWrapper = styled.div`
  max-width: 30ch;
  align-self: center;
  margin: ${(props) => (props.right ? "0 0 0 auto" : "0 auto 0 0")};
  text-align: ${(props) => (props.right ? "right" : "left")};
  a {
    ${themeNavLinks(...[, ,], "1")}
  }

  @media ${device.mobile} {
    max-width: 35vw;
  }
`

const Pagination = ({ page, totalPages, archiveSlug }) => {
  page = parseInt(page)
  totalPages = parseInt(totalPages)

  return (
    <Container>
      <Wrapper>
        {page > 2 ? (
          <>
            <span>&lang;</span>
            <LinkWrapper>
              <Link href={`/${archiveSlug}?page=${parseInt(page) - 1}`}>
                <a>Previous page</a>
              </Link>
            </LinkWrapper>
          </>
        ) : page === 2 ? (
          <>
            <span>&lang;</span>
            <LinkWrapper>
            <Link href={`/${archiveSlug}`}>
              <a>Previous page</a>
            </Link>
            </LinkWrapper>
          </>
        ) : null}

        {totalPages > 1 && page !== totalPages ? (
          <>
            <LinkWrapper right>
              <Link href={`/${archiveSlug}?page=${parseInt(page) + 1}`}>
                <a right>Next page</a>
              </Link>
            </LinkWrapper>
            <span>&rang;</span>
          </>
        ) : null}
      </Wrapper>
    </Container>
  )
}

export default Pagination
