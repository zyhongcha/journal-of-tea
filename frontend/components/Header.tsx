import { serifFont } from "../utils/fonts"
import Link from "next/link"
import { theme, themeNavLinks, themeTitle } from "../utils/theme-styles"
import { device } from "../lib/media"
import Hamburger from "./Hamburger"
import MobileMenu from "./MobileMenu"
import { useState, useEffect } from "react"
import styled from "styled-components"
import { useRouter } from "next/router"

const HeaderElement = styled.header`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 10;
  justify-content: space-between;
  margin: 0 auto;
  height: 100px;
  max-width: ${(props) =>
    props.isArticle ? theme.articlePageWidth : theme.pageWidth};
  transition-property: max-width, margin, left, right, position;
  transition-duration: 800ms;
  transition-delay: 500ms;
  transition-timing-function: ease-linear;



  @media ${device.mobile} {
    height: 70px;
    width: 100%;
    padding: 0 ${theme.gap};

  }
`

const TitleLink = styled.a`
  z-index: 10;
cursor: pointer;

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

    useEffect(() => {
      if (open) {
        document.body.style.overflowY = "hidden"
      } else {
        document.body.style.overflowY = "auto"
      }
    },[open])

  function toggleOpen(): void {
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
