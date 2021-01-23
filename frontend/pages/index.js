import Articles from "../components/Articles"
import { fetchAPI } from "../lib/api"
import Pagination from "../components/Pagination"
import Link from "next/link"

import { useRouter } from "next/router"

const Home = ({ articles, page }) => {
  const router = useRouter()

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
  const articles = await fetchAPI(`/articles?_sort=published:DESC`)

  return {
    props: {
      articles: articles,
    },
  }
}

export default Home
