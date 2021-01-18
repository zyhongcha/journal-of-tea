import { accentFont } from "../utils/fonts"
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

const FixedHeader = styled.div`
    position: fixed;

`

const HeaderElement = styled.header`
  display: flex;
  align-items: center;
  position: ${props => props.isArticle ? 'fixed' : 'relative'};
  left: ${props => props.isArticle ? 0 : 'unset'};
  right: ${props => props.isArticle ? 0 : 'unset'};
  background: #fff;
  z-index: 10;
  justify-content: space-between;
  margin: 0 auto;
  height: ${theme.navbarHeight};
  max-width: ${props => props.isArticle ? theme.articlePageWidth : theme.pageWidth};
  padding: ${props => props.isArticle ? `${theme.gap} calc(6*${theme.gap})`: 0};
    transition-property: max-width, padding, margin, left,right, position; 
transition-duration: 800ms;
transition-delay: 500ms;
transition-timing-function: ease-linear;

  @media ${device.tablet} {
    /* padding: calc(4*${theme.gap}); */
  }

  @media ${device.mobile} {
    padding: ${theme.gap} 0;
  }
`

const TitleLink = styled.a`
    
`

export const Title = styled.h1`
  font-family: ${accentFont};
  font-weight: 400;
  font-size: 1.9rem;
  margin: 0;

  ${themeTitle};
  @media ${device.mobile} {
    font-size: 1.4rem;
  }
`

const InnerLink = styled.a`
  font-family: ${accentFont};
  cursor: pointer;
  &:not(:last-of-type) {
    margin: 0 1rem;
  }
  ${themeNavLinks}

  @media ${device.mobile} {
    display: none;
  }
`

const Header = ({ props }) => {
    const [open, setOpen] = useState(false)
    const router = useRouter()


//   let pageWidthDifference = theme.pageWidth - theme.articlePageWidth - 6*(theme.gap.substring(0,2))
    // console.log(pageWidthDifference)

    //   useEffect(() => {
            // gsap.to('.navbar', {
            //     x: router.pathname.startsWith('/article/') === true ? pageWidthDifference : 0 
            //     })
//   },[router])

  function toggleOpen() {
    console.log(open, "clicked ")
    setOpen((prevState) => !prevState)
  }

  return (
    <HeaderElement isArticle={router.pathname.startsWith('/article/')}>
      <Link href="/">
        <a>
          <Title>Zyhong's Journal of Tea</Title>
        </a>
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
