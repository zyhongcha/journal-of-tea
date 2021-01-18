import Head from "next/head"
// import fs from "fs"
import path from "path"
import matter from "gray-matter"
import marked from "marked"
// import { NEXT_PUBLIC_STRAPI_API_URL } from "./..env.local"
import { fetchAPI } from "../../lib/api"
import ReactMarkdown from "react-markdown"
import { device } from "../../lib/media"
import ArticleMeta from '../../components/ArticleMeta'
import styled from 'styled-components'

import { theme } from "../../utils/theme-styles"

import {md } from '../../utils/markdownParser'




const ArticleWrapper = styled.div`
max-width: ${theme.articlePageWidth};
margin: 0 auto;

padding: 184px calc(6*${theme.gap});

  @media ${device.tablet} {
  padding: calc(4*${theme.gap});
  }

  @media ${device.mobile} {
  padding: ${theme.gap};
  }

`
const Content = styled.div`
  font-size: 1.2rem;
  /* font-family: "Georgia"; */
`



const Article = ({ article }) => {
  return (
    <ArticleWrapper>
      <Head>
        <title>{article.title}</title>
      </Head>

      <ArticleMeta metadata={ article }/>
      
      <Content dangerouslySetInnerHTML={{ __html: md.render(article.content) }} />

    </ArticleWrapper>
  )
}

export const getStaticPaths = async () => {
  //   const files = fs.readdirSync("posts")
  const articles = await fetchAPI("/articles")

  

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const articles = await fetchAPI(`/articles?slug=${params.slug}`)

  //   const unparsedMarkdown = fs.readFileSync(
  //     path.join("posts", slug + ".md"),
  //     "utf-8"
  //   )
  //   const parsedMarkdown = matter(unparsedMarkdown)

  //   const htmlString = marked(parsedMarkdown.content)

  return {
    props: {
      article: articles[0],
    },
    revalidate: 1,
  }
}

export default Article
