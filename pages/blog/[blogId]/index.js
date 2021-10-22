import React from 'react';
import Link from 'next/link'
import Blog from '../../../components/blog/Blog'
import {useRouter} from 'next/router'


const SinglePost = ({blog}) => {
    const router = useRouter()

    if (router?.isFallback) {
        return <h2>Loading...</h2>
    }
    return (
        <div style={{width:"100",maxWidth:500,margin:"20px auto"}}>
            <div>
            <Link href="/blog"><a> Blog List</a></Link>
            </div>
           
            <Blog  blog={blog} />
        </div>
        
    )
}

export async function getStaticPaths() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")

    const data = await res.json()
    const paths = data?.map((item)=>{
        return {params:{blogId:`${item?.id}`}}
    })
    return{
        paths,
        fallback:true
    }
}

export async function getStaticProps (context){
    const {params} = context
 
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogId}`)
    const data = await res.json()

    if (!data.id) {
        return{
            notFound:true
        }
        
    }

    return{
        props:{
            blog : data
        },
        revalidate:30,
    }
    
}



export default SinglePost