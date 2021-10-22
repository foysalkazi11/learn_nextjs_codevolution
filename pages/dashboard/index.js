import React from 'react';
import useSWR from 'swr';

const fetcher = async()=>{
    const res = await fetch("http://localhost:5000/dashboard")
    const data = await res.json()
    return data
}

 const Dashboard = () => {

    const {data,error} = useSWR("deshBoard",fetcher)
    if (error) {
        return <p>An Error has occured</p>
    }
    if (!data) {
        return <p>Loading...</p>
    }
    return (
        <div style={{width:"100",maxWidth:500,margin:"20px auto"}}>
         Dashboard post {data.post}
        </div>
    )
}


export default Dashboard;
