import styled, { ThemeProvider } from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { sansSerifFont } from '../utils/fonts'
import { device } from '../lib/media'
import { theme } from '../utils/theme-styles'



export const Content = styled.main`
    box-sizing: border-box;
    margin: auto;
    padding: 0  calc(4 * ${theme.gap});
    transition-property: color, background-color;
    transition-duration: 200ms;
    transition-timing-function: ease-out;
    font-family: ${ sansSerifFont };
    max-width: ${ theme.pageWidth };

    @media (max-width: ${theme.pageWidth}) {
        padding: 0 calc(4* ${theme.gap});
    }

    @media ${device.mobile} {
        padding: 0 ${theme.gap};
    }
`

