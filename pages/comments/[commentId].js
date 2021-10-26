import React from 'react'
import {useRouter} from 'next/router';
import Link from 'next/link'


const CommentDetails = ({comment}) => {
    const router = useRouter()

    if (router?.isFallback) {
        return <p>Loading...</p>
    }
    
    return (
        <div style={{width:"100",maxWidth:500,margin:"20px auto"}}>
            <div>
                <Link href="/comments" passHref>
                    Comments
                </Link>
            </div>
            <div>
                <p>{comment?.comment}</p>
            </div>
        </div>
    )
}

export async function getStaticPaths() {

    const res = await fetch("http://localhost:3000/api/comments")
    const data = await res.json()
    let paths = []
    if (data?.length) {
        paths = data?.map(item =>{
            return {params:{commentId:String(item.id)}}
        })
    }
    
    return{
        paths,
        fallback:true
    }
}

export async function getStaticProps(context) {
    const {params:{commentId}} = context
    
    const res = await fetch(`http://localhost:3000/api/comments/${commentId}`)
    const data = await res.json()
    
    if (!data?.id) {
        return {
            notFound:true
        }
    }

    return{
        props:{
            comment:data,
            revalidate:30,
        }
    }
}



export default CommentDetails
