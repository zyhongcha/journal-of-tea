import { fetchAPI } from "../lib/api"
import Articles from "../components/Articles"
import Pagination from "../components/Pagination"
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import styled from 'styled-components'
import Link from "next/link"
import { theme, themeNavLinks } from "../utils/theme-styles"
import { device } from "../lib/media"

const Title = styled.h1`
  font-size: 1.9rem;
 span {
text-decoration: underline;
 }

`
const Container = styled.div`
  display: flex;
  gap: 8px;
`
const LinkWrapper = styled.div`
  a {
    font-weight: bold;
    ${themeNavLinks(...[, ,], "1")}
  }
`



const Archive = ({ archive, page, archiveSlug }) => {
  const articlesToShow = 14
  const totalPages = Math.ceil(archive.length / articlesToShow)
  const offset = page > 1 ? (page - 1) * articlesToShow : 0
  const limit = offset + articlesToShow
  archive = archive.slice(offset, limit)

  return (
    <>
    <Title>browsing <span>{archiveSlug && archiveSlug}</span></Title>
      <Articles articles={archive} />
      {page !== totalPages ? (
        <Pagination
          page={page}
          totalPages={totalPages}
          archiveSlug={archiveSlug}
        />
      ) : null}
      <Container>
      <span>&lang;</span>
      <LinkWrapper>
      <Link href="/">
      <a>back to homepage</a>
      </Link>
      </LinkWrapper>
      </Container>
    </>
  )
}


export const getServerSideProps = async (context) => {
  const page = context.query.page ?? 1
  let additionalQueries =  "_start=14"
  if (context.params.archive !== "archive") {
    additionalQueries = `categories.slug=${context.params.archive}`
  }
  
    const articles = await fetchAPI(
      `/articles?${additionalQueries}&_sort=published:desc`
      )

    if (!articles) {
      return { notFound: true }
    }

    return {
      props: {
        archive: articles,
        page: page,
        archiveSlug: context.params.archive,
      },

    }
}

export default Archive
