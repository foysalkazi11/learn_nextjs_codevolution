import React from 'react'
import {useRouter} from 'next/router';
import News from '../../components/news/News';
import Link from 'next/link'
import { getSession,signIn} from 'next-auth/client'

const NewArticleList = (props) => {
    const router = useRouter()
    if (router?.isFallback) {
        return <h2>Loading...</h2>
    }
    if (!props?.newsList && !props?.session) {
        return (
        <div className="container">
            <h4>Plase login first to see recent news</h4>
            <button onClick={signIn}>Login</button>
        </div>
        )
    }
    return (
        <div style={{width:"100",maxWidth:500,margin:"20px auto"}}>
            <div>
                <Link href="/" passHref>
                    Home
                </Link>
            </div>
            {props?.newsList?.map((item,index)=>{
                return <News key={index} news={item} />
            })}
        </div>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context)
    if (!session) {
        return{
            props:{
                newsList:null,
                session
            }
            // redirect:{
            //     destination:`/api/auth/singin?callbackUrl=http://localhost:3000/news`,
            //     parmanent:false
            // }
            
        }
    }else{
        const res = await fetch("http://localhost:5000/news")
    const data = await res.json()
    if (!data?.length) {
        return{
            notFound:true
        }
    }
    return{
        props:{
            newsList:data,
            session
        }
    }
    }
    
}

export default NewArticleList
