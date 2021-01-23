import { device } from '../lib/media'
import { theme } from "../utils/theme-styles"
import gsap from "gsap";
import styled from "styled-components"
import Link from "next/link"
// import { TimelineLite } from 'gsap/gsap-core'
import { useEffect, useRef } from 'react'
import { serifFont } from "../utils/fonts"
import { Title } from './Header'


const MenuContainer = styled.div.attrs({

})`
    transform: ${props => props.open ? "translateX(0)" : "translateX(-100%)"};
    transition: transform 400ms ease-in-out;
    position: fixed;
    margin-right:auto;
    width: 100%;
    height: 100%;
    right: 0;
    top:0;
    background: #fff;
    display: none;
    z-index: 3;
    padding: ${theme.gap};
    @media ${device.mobile} {
        display:flex;
    }

`
const MenuWrapper = styled.div`
        flex: 1 0 50%;
        display: flex;
        flex-direction: column;
        position: relative;
        max-height: 100%;
        align-items: flex-end;
        justify-content: center;
        font-family: ${serifFont};

        &>a {
            padding: 1.5rem 10px 1.5rem 0;
        }
`



const MobileMenu = ({ open }) => {


    return (
        <MenuContainer open={open}>
            <MenuWrapper>
            <Link href="/about">
            <a>About</a>
            </Link>
            <Link href="/about">
            <a>Contact</a>
            </Link>
        </MenuWrapper>
        </MenuContainer>
    )
}


export default MobileMenu