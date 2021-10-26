import React from 'react';
import Link from 'next/link'
import Blog from '../../components/blog/Blog'
import {useSession} from 'next-auth/client' 
import {useRouter} from 'next/router'

const BlogPage = ({blogs}) => {
    const [session,loading] = useSession()
    const router = useRouter()

    if (router?.isFallback) {
        return <h2>Loading...</h2>
    }
    
    return (
        <div style={{width:"100",maxWidth:500,margin:"20px auto"}}>
            <div>
            <Link href="/"><a> Home</a></Link>
            </div>
            <div>
                <h3>{session ? `WelCome ${session.user.name}`  :null}</h3>
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

export default BlogPage
