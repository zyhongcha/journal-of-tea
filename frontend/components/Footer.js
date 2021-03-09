import styled from "styled-components"
import Link from "next/link"
import { theme, themeNavLinks, themeTitle } from "../utils/theme-styles"
import { device } from "../lib/media"
import { serifFont, sansSerifFont } from "../utils/fonts"

const FooterContainer = styled.footer`
display: flex;
place-content: space-between;
align-items: center;
margin: calc(4*${theme.gap}) ${theme.gap} 0;
`

const InnerLink = styled.a`
  font-family: ${serifFont};
  cursor: pointer;
  &:not(:last-of-type) {
    margin: 0 1rem;
  }
  ${themeNavLinks(...[, ,], "1")}

`

const Socials = styled.div`

`

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <Link href="/about">
          <InnerLink>About</InnerLink>
        </Link>
        <Link href="/legal">
          <InnerLink>Legal</InnerLink>
        </Link>
      </div>
      <Socials>
          <a href="https://www.instagram.com/zyhongcha/" target="_blank" rel="noopener noreferrer">
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="2.5rem" width="2.5rem" xmlns="http://www.w3.org/2000/svg"><path d="M336 96c21.2 0 41.3 8.4 56.5 23.5S416 154.8 416 176v160c0 21.2-8.4 41.3-23.5 56.5S357.2 416 336 416H176c-21.2 0-41.3-8.4-56.5-23.5S96 357.2 96 336V176c0-21.2 8.4-41.3 23.5-56.5S154.8 96 176 96h160m0-32H176c-61.6 0-112 50.4-112 112v160c0 61.6 50.4 112 112 112h160c61.6 0 112-50.4 112-112V176c0-61.6-50.4-112-112-112z"></path><path d="M360 176c-13.3 0-24-10.7-24-24s10.7-24 24-24c13.2 0 24 10.7 24 24s-10.8 24-24 24zM256 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64m0-32c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96z"></path></svg>
      </a>
      </Socials>
    </FooterContainer>
  )
}

export default Footer
