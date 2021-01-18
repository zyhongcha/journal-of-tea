import styled from "styled-components"
import { theme } from "../utils/theme-styles"
import { device } from "../lib/media"

const Outer = styled.a`
  display: none;
  @media ${device.mobile} {
    vertical-align: middle;

    position: relative;
    z-index: 10;
    border: none;
    padding: 0;
    background: transparent;
    display: inline-flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    &:focus {
      outline: none;
    }

    div {
      width: 2rem;
      height: 0.2rem;
      background: #000;
      border-radius: 8px;
      transform-origin: 0.5px;

      transition-property: opacity, transform;
      transition-duration: 300ms;
      transition-timing-function: ease-in-out;
      position: relative;
      :first-child {
        transform: ${(props) => (props.open ? "rotate(45deg) " : "rotate(0)")};
      }
      :nth-child(2) {
        opacity: ${(props) => (props.open ? "0" : "1")};
        transform: ${(props) =>
          props.open ? "translateX(20px)" : "translateX(0)"};
      }
      :nth-child(3) {
        transform: ${(props) =>
          props.open ? "rotate(-45deg)" : "rotate(0)"};
      }
    }
  }
`

const Hamburger = ({ toggleOpen, open }) => {
  return (
    <Outer onClick={toggleOpen} open={open}>
      <div />
      <div />
      <div />
    </Outer>
  )
}

export default Hamburger
