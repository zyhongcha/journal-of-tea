import Articles from "../components/Articles"
import { fetchAPI } from "../lib/api"
import Pagination from "../components/Pagination"
import Link from "next/link"

import { useRouter } from "next/router"

const Home = ({ articles, page }) => {
  console.log(articles)
  const router = useRouter()
  console.log(router)

  return (
    <>
      <Articles articles={articles} />
      {/* <Pagination currentPage={page}/> */}
{/* 
      <Link href={`${router.pathname}?page=${page + 1}`}>
        <a>Next page</a>
      </Link> */}
    </>
  )
}

export const getStaticProps = async ( ) => {
  const articles = await fetchAPI(`/articles`)

  return {
    props: {
      articles: articles,
    },
  }
}

export default Home
