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
import Image from '../../components/Image'
import RelatedArticles from '../../components/RelatedArticles'
import { theme } from "../../utils/theme-styles"

import {md } from '../../utils/markdownParser'
import { serifFont } from "../../utils/fonts"




const ArticleWrapper = styled.div`
max-width: ${theme.articlePageWidth};
margin: calc(2*${theme.gap}) auto;


  @media ${device.tablet} {
  }

  @media ${device.mobile} {
  }

`
const Content = styled.div`
  font-size: 1.2rem;

  p {
    padding-top: calc(2*${theme.gap});
  }

`
const Excerpt = styled.div`
  font-size: 1.2rem;
  padding: ${theme.gap} 0;

`


const Article = ({ article, relatedArticles }) => {
  return (
    <ArticleWrapper>
      <Head>
        <title>{article.title}</title>
      </Head>

      <ArticleMeta metadata={ article }/>
      <Excerpt dangerouslySetInnerHTML={{ __html: md.render(article.excerpt) }} />
      <Image imageObj={article.thumbnail}/>
      <Content className='article-content' dangerouslySetInnerHTML={{ __html: md.render(article.content) }} />
    <RelatedArticles relatedArticles={relatedArticles}/>
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
  const articles = await fetchAPI(`/articles?_sort=published_at:desc`)

  const article = articles.filter((article, index) => {    
    return article.slug === params.slug
  })
  let articleIndex = articles.indexOf(article[0])

  const [nextArticle, prevArticle] = [articles[articleIndex-1] ?? null, articles[articleIndex+1] ?? null] 
    
  return {
    props: {
      article: article[0],
      relatedArticles: [nextArticle, prevArticle]
    },
    revalidate: 1,
  }
}

export default Article
