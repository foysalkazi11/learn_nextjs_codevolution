import React,{useState,useEffect} from 'react';
import useSWR from 'swr';
import {getSession,signIn} from 'next-auth/client'
import {dashboard} from '../../data/fakeData'

const fetcher = async()=>{
    // const res = await fetch("http://localhost:5000/dashboard")
    // const data = await res.json()
    return dashboard
}

 const Dashboard = () => {
    const [loading,setLoading] = useState(true)
    const {data,error} = useSWR("deshBoard",fetcher)
    useEffect(()=>{
        const securePage = async ()=>{
            const session = await getSession()
            if (!session) {
                signIn()
            }else{
                setLoading(false)
            }
        }
        securePage()

    },[])
    
    if (error) {
        return <p>An Error has occured</p>
    }
    if (!data || loading) {
        return <p>Loading...</p>
    }
    return (
        <div style={{width:"100",maxWidth:500,margin:"20px auto"}}>
         Dashboard post : {data.post}, comments : {data?.comment}
        </div>
    )
}


export default Dashboard;
