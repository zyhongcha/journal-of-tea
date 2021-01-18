import styled, { ThemeProvider } from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { bodyFont } from '../utils/fonts'
import { theme } from '../utils/theme-styles'



export const Content = styled.main`
    box-sizing: border-box;
    margin: auto;    
    transition-property: color, background-color;
    transition-duration: 200ms;
    transition-timing-function: ease-out;
    font-family: ${ bodyFont };
    max-width: ${ theme.pageWidth };


`






// const Layout = ({children}) => {


//     return (
//     <ThemeProvider theme={theme}>
//     <Main>
//     <Header/>

//     {children}
//     <Footer />

//     </Main>
//     </ThemeProvider>
//     )
// }

// export default Layout