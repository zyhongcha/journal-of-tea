import styled from 'styled-components'
import Img from './Image'
import { theme } from "../utils/theme-styles"
import { device } from '../lib/media'


const HeroWrapper = styled.div.attrs(props => ({
    image: props.image
}))`
position: relative;
height: 512px;
background-image: url(${props => props.image});
background-size: cover;
background-position: center center; 
@media ${device.mobile} {
margin: 0;
height: 360px;
}
`


const Hero = ( { firstArticle }) => {

 

    return(
        <>
    <HeroWrapper image={firstArticle.thumbnail.formats.large.url}/>
        </>
    )
}

export default Hero