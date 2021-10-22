import React from 'react'
import Link from 'next/link'

const Blog = ({blog}) => {
    const {id ,title} = blog
    return (
        <div style={{border:"1px solid black",padding:"5px",margin:"5px"}}>
            <Link href={`/blog/${id}`} passHref>
            {title}
            </Link>
        </div>
    )
}

export default Blog
