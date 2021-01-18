import { fetchAPI } from "../lib/api"
import Articles from "../components/Articles"

const Archive = ({ archive }) => {
  return (
    <>
      <Articles articles={archive} />
      {console.log(archive)}
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
  const page = context.query.page || 1
  const articlesToShow = 2 // -1 otherwise 0 would throw err when not enough articles
  const offset = page > 1 ? (page - 1) * articlesToShow : 0

  // const articles = await fetchAPI(`/articles?_start=${offset}&_limit=${articlesToShow}&categories.slug=${context.params.archive}&_sort=published:DESC`)
  try {
    const articles = await fetchAPI(
      `/articles?categories.slug=${context.params.archive}&_start=${offset}&_limit=${articlesToShow}&_sort=published:desc`
    )

    //  let filteredArticles = articles.filter((article) => {
    //    return article.categories.some((c) => {
    //      return c.slug === context.params.archive
    //    })
    //  })

    if (!articles) {
      return { notFound: true}
    }

    return {
      props: {
        archive: articles,
      },
    }
  } catch (err) {
    console.log(err)
    return { notFound: true }
  }
}

export default Archive
