import { theme } from "../utils/theme-styles"
import { serifFont, sansSerifFont } from "../utils/fonts"


import Link from "next/link"
import styled from "styled-components"



const InnerLink = styled.a`
  color: ${theme.accent};
  cursor: pointer;
  text-transform: lowercase;
  &:hover {
    color: ${theme.black};
    background: ${theme.accentLighter};
    
  }


`


function Categories({ categoryList }) {
  return (
    <>
      {categoryList.length > 1 ? (
        categoryList.map((item, key) => {
          return (
            <span  key={key}>
              <Link href={`/${item.slug}`}>
                <InnerLink>{item.category_name}</InnerLink>
                </Link>
             
            { // add a seperator between the Categories, but exlude the last one:
              key + 1 !== categoryList.length && <span style={{color: '#ddd'}}> | </span>}
            </span>
          )
        })
      ) : (
        <Link href={`/${categoryList[0].slug}`} >
          <InnerLink>{categoryList[0].category_name}</InnerLink>
        </Link>
      )}
    </>
  )
}

export default Categories
