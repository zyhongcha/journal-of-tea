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
  /* position: sticky; */
  /* top: 0; */
  grid-gap: ${theme.gap};
  background: #fff;
  z-index: 10;
  justify-content: space-between;
  margin: 0 auto;
  height: 100px;
  /* max-width: ${(props) =>
    props.isArticle ? theme.articlePageWidth : theme.pageWidth}; */
  /* max-width: ${theme.articlePageWidth}; */
  transition-property: max-width, margin, left, right, position;
  transition-duration: 800ms;
  transition-delay: 500ms;
  transition-timing-function: ease-linear;

  @media ${device.mobile} {
    justify-content: space-between;
  }

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
  font-size: 1.75rem;
  margin: 0;
  color: #555;
  letter-spacing: -0.02em;
  line-height: 1.3;
  ${themeTitle};

  span {
  color:  ${theme.textLightest};
  }
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

  /* @media ${device.mobile} {
    display: none;
  } */
`

const MenuElements = styled.div`

`
const Socials = styled.div`
  display: inline-block;
  padding-left: ${theme.gap};
  /* @media ${device.mobile} {
    display: none;
  } */
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
          <Title><span>Journal</span> of Tea</Title>
        </TitleLink>
      </Link>
      <MenuElements>
      <Link href="/about">
          <InnerLink>About</InnerLink>
        </Link>
      <Link href="/contribute">
        <InnerLink>Contribute (WIP)</InnerLink>
      </Link>
        <Socials>
          <a href="https://www.instagram.com/zyhongcha/" target="_blank" rel="noopener noreferrer">
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="2.5rem" width="2.5rem" xmlns="http://www.w3.org/2000/svg"><path d="M336 96c21.2 0 41.3 8.4 56.5 23.5S416 154.8 416 176v160c0 21.2-8.4 41.3-23.5 56.5S357.2 416 336 416H176c-21.2 0-41.3-8.4-56.5-23.5S96 357.2 96 336V176c0-21.2 8.4-41.3 23.5-56.5S154.8 96 176 96h160m0-32H176c-61.6 0-112 50.4-112 112v160c0 61.6 50.4 112 112 112h160c61.6 0 112-50.4 112-112V176c0-61.6-50.4-112-112-112z"></path><path d="M360 176c-13.3 0-24-10.7-24-24s10.7-24 24-24c13.2 0 24 10.7 24 24s-10.8 24-24 24zM256 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64m0-32c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96z"></path></svg>
      </a>
      </Socials>
        </MenuElements>
      {/* <Hamburger toggleOpen={toggleOpen} open={open} /> */}
      {/* <MobileMenu open={open} /> */}
    </HeaderElement>
  )
}

export default Header
