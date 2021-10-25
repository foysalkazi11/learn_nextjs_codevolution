import React from 'react'
import {useRouter} from 'next/router';
import Events from '../../components/events/Events'
import Link from 'next/link'
const EventsList = ({events}) => {
    const user = process.env.NEXT_PUBLIC_ID
    console.log(user);
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
            <div >
            <Events  events={events} />
            </div>
            
        </div>
    )
}

export async function getServerSideProps(context) {
    const {query} = context
    const {category} = query
    const qyeryString = category ? `categroy=${category}` : ""
    const res = await fetch(`http://localhost:5000/events?${qyeryString}`)
    const data = await res.json()
    if (!data?.length) {
        return{
            notFound:true
        }
    }
    return{
        props:{
            events:data
        }
    }
}

export default EventsList
