import React from 'react';
import Link from 'next/link'
import Blog from '../../components/blog/Blog'

const index = ({blogs}) => {
    return (
        <div style={{width:"100",maxWidth:500,margin:"20px auto"}}>
            <div>
            <Link href="/"><a> Home</a></Link>
            </div>

            {blogs.length ? 
            blogs?.map((item,index)=>{
                return(
                    <Blog key={index} blog={item} />
                )
            })
             :null}

        </div>
        
    )
}

export async function getStaticProps (){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")

    const data = await res.json()

    return{
        props:{
            blogs : data
        },
        revalidate:30,
    }
    
}

export default index
