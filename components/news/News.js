import React from 'react'
import Link from 'next/link'

const News = ({news}) => {
    return (
        <div style={{border:"1px solid black",padding:"5px",margin:"5px"}}>
            
            <Link href={`/news/${news?.id}`} passHref>
            <div>
                <p>{news?.title}</p>
            </div>
            </Link>
        </div>
    )
}

export default News
