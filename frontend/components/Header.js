import { serifFont } from "../utils/fonts"
import Link from "next/link"
import { theme, themeNavLinks, themeTitle } from "../utils/theme-styles"
import { device } from "../lib/media"
import Hamburger from "./Hamburger"
import { GiHamburgerMenu } from "react-icons/gi"
import MobileMenu from "./MobileMenu"
import { useState, useEffect } from "react"
import styled from "styled-components"
import gsap from "gsap"
import { useRouter } from "next/router"

const HeaderElement = styled.header`
  display: flex;
  align-items: center;
  /* position: ${(props) => (props.isArticle ? "fixed" : "relative")}; */
  position: sticky;
  top: 0;
  /* left: ${(props) => (props.isArticle ? 0 : "unset")}; */
  /* right: ${(props) => (props.isArticle ? 0 : "unset")}; */
  background: #fff;
  z-index: 10;
  justify-content: space-between;
  margin: 0 auto;
  height: 100px;
  /* max-width: ${theme.pageWidth}; */

  max-width: ${(props) =>
    props.isArticle ? theme.articlePageWidth : theme.pageWidth};
  transition-property: max-width, margin, left, right, position;
  transition-duration: 800ms;
  transition-delay: 500ms;
  transition-timing-function: ease-linear;

  @media ${device.tablet} {
    /* padding: calc(4*${theme.gap}); */
  }

  @media ${device.mobile} {
    height: 70px;
    width: 100%;
    padding: 0 ${theme.gap};

  }
`

const TitleLink = styled.a`
  z-index: 10;
`

export const Title = styled.h1`
  font-family: ${serifFont};
  font-weight: 400;
  font-size: 1.9rem;
  margin: 0;
  ${themeTitle};
  @media ${device.mobile} {
    font-size: 1.4rem;
  }
`

const InnerLink = styled.a`
  font-family: ${serifFont};
  cursor: pointer;
  &:not(:last-of-type) {
    margin: 0 1rem;
  }
  ${themeNavLinks(...[, ,], "1")}

  @media ${device.mobile} {
    display: none;
  }
`

const Header = ({ props }) => {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  //   let pageWidthDifference = theme.pageWidth - theme.articlePageWidth - 6*(theme.gap.substring(0,2))
  // console.log(pageWidthDifference)

    useEffect(() => {
      if (open) {
        document.body.style = "overflow-y:hidden"
      } else {
        document.body.style = ""
      }
    },[open])

  function toggleOpen() {
    setOpen((prevState) => !prevState)

  }

  return (
    <HeaderElement isArticle={router.pathname.startsWith("/article/")}>
      <Link href="/">
        <TitleLink>
          <Title>Zyhong's Journal of Tea</Title>
        </TitleLink>
      </Link>
      <div>
        <Link href="/about">
          <InnerLink>About</InnerLink>
        </Link>
        <Link href="/contact">
          <InnerLink>Contact</InnerLink>
        </Link>
      </div>
      <Hamburger toggleOpen={toggleOpen} open={open} />
      <MobileMenu open={open} />
    </HeaderElement>
  )
}

export default Header
