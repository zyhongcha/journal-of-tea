import Articles from "../components/Articles"
import Pagination from "../components/Pagination"
import { fetchAPI } from "../lib/api"
import Link from "next/link"
import { useRouter } from "next/router"

const Home = ({ articles, page }) => {
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
      <Pagination/>
    </>
  )
}

export const getStaticProps = async ( ) => {
  const articles = await fetchAPI(`/articles?_limit=14&_sort=published:DESC`)

  return {
    props: {
      articles: articles,
    },
  }
}

export default Home
