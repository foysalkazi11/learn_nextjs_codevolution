import React from 'react'

const NewsDetails = (props) => {
    console.log(props);
    return (
        <div>
            single News
        </div>
    )
}

export async function getServerSideProps(context) {
    
    console.log(context.params);
    
   
    const res = await fetch(`http://localhost:5000/news}`)
    const data = await res.json()
    if (!data?.length) {
        return{
            notFound:true
        }
    }
    return{
        props:{
            news:data
        }
    }
}

export default NewsDetails
