import { fetchAPI } from "../lib/api"
import Articles from "../components/Articles"
import Pagination from "../components/Pagination"

const Archive = ({ archive, page, archiveSlug }) => {
  const articlesToShow = 14
  const totalPages = Math.ceil(archive.length / articlesToShow)
  const offset = page > 1 ? (page - 1) * articlesToShow : 0
  const limit = offset + articlesToShow
  archive = archive.slice(offset, limit)

  return (
    <>
      <Articles articles={archive} />
      {page !== totalPages ? (
        <Pagination
          page={page}
          totalPages={totalPages}
          archiveSlug={archiveSlug}
        />
      ) : null}
    </>
  )
}

// export const getServerSidePath = async () => {
//   const categories = await fetchAPI("/categories")

//   return {
//     paths:
//     [...categories.map((category) => ({
//       params: { archive: category.slug },
//     })),
//     { params: { archive: '1' } },
//         ],
//     fallback: false,
//   }
// }

export const getServerSideProps = async (context) => {
  const page = context.query.page ?? 1

  // const articlesToShow = 2 // -1 otherwise 0 would throw err when not enough articles
  // const offset = page > 1 ? (page - 1) * articlesToShow : 0

  // const articles = await fetchAPI(`/articles?_start=${offset}&_limit=${articlesToShow}&categories.slug=${context.params.archive}&_sort=published:DESC`)
  let categoryQueries =  ""
  if (context.params.archive !== "articles") {
    categoryQueries = `categories.slug=${context.params.archive}`
  }
  
    const articles = await fetchAPI(
      `/articles?${categoryQueries}&_sort=published:desc`
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
