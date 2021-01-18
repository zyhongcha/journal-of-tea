import { fetchAPI } from "../lib/api"
import Articles from "../components/Articles"

const Archive = ({ filteredArticles }) => {
  return (
    <>
      <Articles articles={filteredArticles} />
      {console.log(filteredArticles)}
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
  const pagesToShow = 2
  const offset = page > 1 ? (page-1) * pagesToShow : 0

    const articles = await fetchAPI(`/articles?_start=${offset}&_limit=${pagesToShow}`)
 
  let filteredArticles = articles.filter((article) => {
    return article.categories.some((c) => {
      return c.slug === context.params.archive 
    })
  })


  return {
    props: {
      filteredArticles: filteredArticles,
    },
  }
}

export default Archive
