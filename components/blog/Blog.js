import React from 'react'
import Link from 'next/link';
import Head from 'next/head'

const Blog = ({blog}) => {
    const {id ,title} = blog
    return (
        <>
         <Head>
            <title>single id {id}</title>
            <meta name="descripation" content={title}  />
        </Head>
        <div style={{border:"1px solid black",padding:"5px",margin:"5px"}}>
            <Link href={`/blog/${id}`} passHref>
            {title}
            </Link>
        </div>
        </>
    )
}

export default Blog
