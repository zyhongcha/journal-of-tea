import Head from "next/head"
import { fetchAPI } from "../../lib/api"
// import { device } from "../../lib/media"
import ArticleMeta from "../../components/ArticleMeta"
import styled from "styled-components"
import Image from "../../components/Image"
import RelatedArticles from "../../components/RelatedArticles"
import { theme, themeNavLinks } from "../../utils/theme-styles"
import { md } from "../../utils/markdownParser"
import { serifFont } from "../../utils/fonts"

const ArticleWrapper = styled.div`
  max-width: ${theme.articlePageWidth};
  margin: calc(2 * ${theme.gap}) auto;
  font-family: ${serifFont};
  line-height: 2.1;
  font-size: 1.2rem;


`
const Content = styled.div`
  p {
    padding-top: calc(1.25 *${theme.gap});
  }
  h3 {
    margin-top: calc(2.5 * ${theme.gap});
  }
  a {
    font-weight: bold;
    ${themeNavLinks(...[, ,], "1")}
  }
  em {
    text-align: center;
  }
`
const Excerpt = styled.div`
  padding: ${theme.gap} 0;
`

const Article = ({ article, relatedArticles }) => {
  return (
    <ArticleWrapper>
      <Head>
        <title>{article.title}</title>
      </Head>

      <ArticleMeta metadata={article} />
      <Excerpt
        dangerouslySetInnerHTML={{ __html: md.render(article.excerpt) }}
      />
      <Image imageObj={article.thumbnail} />
      <Content
        className="article-content"
        dangerouslySetInnerHTML={{ __html: md.render(article.content) }}
      />
      <RelatedArticles relatedArticles={relatedArticles} />
    </ArticleWrapper>
  )
}

export const getStaticPaths = async () => {
  const articles = await fetchAPI("/articles?_sort=published_at:desc")
  const paths = articles.map((article) => ({
    params: {
      slug: article.slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const articles = await fetchAPI(`/articles?_sort=published_at:desc`)
  const article = articles.filter((article, index) => {
    return article.slug === params.slug
  })
  let articleIndex = articles.indexOf(article[0])

  const [nextArticle, prevArticle] = [
    articles[articleIndex - 1] ?? null,
    articles[articleIndex + 1] ?? null,
  ]

  return {
    props: {
      article: article[0],
      relatedArticles: [nextArticle, prevArticle],
    },
  }
}

export default Article
