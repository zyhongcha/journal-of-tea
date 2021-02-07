import styled, { ThemeProvider } from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { sansSerifFont } from '../utils/fonts'
import { device } from '../lib/media'
import { theme } from '../utils/theme-styles'

export const Layout = styled.div`
    max-width: ${ theme.pageWidth };
    margin: auto;
    padding: 0  calc(4 * ${theme.gap}) calc(4 * ${theme.gap});

    @media (max-width: ${theme.pageWidth}) {
        padding: 0 calc(2* ${theme.gap}) calc(4 * ${theme.gap});
    }

    @media ${device.mobile} {
        padding: 0 0 calc(2 * ${theme.gap});
    }

`

export const Content = styled.main`
    box-sizing: border-box;
    margin: auto;
    transition-property: color, background-color;
    transition-duration: 200ms;
    transition-timing-function: ease-out;
    font-family: ${ sansSerifFont };

    @media ${device.mobile} {
        padding: 0 ${theme.gap};
    }

   
`

