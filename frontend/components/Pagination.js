import styled from 'styled-components'
import { useRouter } from "next/router"
import Link from "next/link"




const Pagination = ( {currentPage} ) => {

    const router = useRouter()
    console.log(router)
    

    return (
        <Link href={`/${router.path}?page=${currentPage +1}`}>
        <a>
            Next page
        </a>
        </Link>
    )
}

export default Pagination