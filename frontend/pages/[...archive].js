import { fetchAPI } from "../lib/api"
import Articles from "../components/Articles"
import Pagination from "../components/Pagination"
import { useRouter } from "next/router"
import { useEffect } from "react"
import styled from "styled-components"
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
      <Title>
        browsing <span>{archiveSlug && archiveSlug}</span>
      </Title>
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
            <a>go back</a>
          </Link>
        </LinkWrapper>
      </Container>
    </>
  )
}
export async function getStaticPaths() {
  const categories = [
    "health",
    "news",
    "stories",
    "tea-science",
    "tea-types",
    "teaware",
  ]
  let additionalQueries = "_start=14"
  const articles = await fetchAPI(
    `/articles?${additionalQueries}&_sort=published:desc`
  )
  let page = "1"
  return {
    fallback: false,
    paths: [
      ...categories.map((category) => {
        return {
          params: { archive: [category] },
        }
      }),
      { params: { archive: ["archive"] } },  // for archive, page starts at "2" to offset 14
      // { params: { archive: ["archive", "2"] } },
    ],

  }
}

export const getStaticProps = async ({ params }) => {
  let pageIndex = params.archive.length === 2 ? +params.archive[1] : 1
  let additionalQueries = ""
  additionalQueries +=
    params.archive[0] !== "archive"
      ? `categories.slug=${params.archive[0]}&`
      : ""
  additionalQueries += params.archive[0] === "archive" ? `_start=${pageIndex * 14}` : `_start=${(pageIndex-1) * 14}` 
  const articles = await fetchAPI(
    `/articles?${additionalQueries}&_sort=published:desc`
  )
    console.log(pageIndex)
  return {
    props: {
      archive: articles,
      page: pageIndex,
      archiveSlug: params.archive[0],
    },
  }
}
// export const getServerSideProps = async (context) => {
//   const page = context.query.page ?? 1
//   if (context.params.archive !== "archive") {
//     additionalQueries = `categories.slug=${context.params.archive}`
//   }

//     const articles = await fetchAPI(
//       `/articles?${additionalQueries}&_sort=published:desc`
//       )

//     if (!articles) {
//       return { notFound: true }
//     }

//     return {
//       props: {
//         archive: articles,
//         page: page,
//         archiveSlug: context.params.archive,
//       },

//     }
// }

export default Archive
