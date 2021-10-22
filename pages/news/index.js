import React from 'react'
import {useRouter} from 'next/router';
import News from '../../components/news/News';
import Link from 'next/link'

const NewArticleList = ({newsList}) => {
    const router = useRouter()
    if (router?.isFallback) {
        return <h2>Loading...</h2>
    }
    return (
        <div style={{width:"100",maxWidth:500,margin:"20px auto"}}>
            <div>
                <Link href="/" passHref>
                    Home
                </Link>
            </div>
            {newsList?.map((item,index)=>{
                return <News key={index} news={item} />
            })}
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch("http://localhost:5000/news")
    const data = await res.json()
    if (!data?.length) {
        return{
            notFound:true
        }
    }
    return{
        props:{
            newsList:data
        }
    }
}

export default NewArticleList
