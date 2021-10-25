import React,{useState,useEffect} from 'react';
import useSWR from 'swr';
import Link from 'next/link'



const Comments = () => {
    const [input,setInput] = useState("")
    const [data,setData] = useState([])
    useEffect(() => {
        const fetcher = async()=>{
            const res = await fetch("http://localhost:3000/api/comments")
            const data = await res.json()
            setData(data)
        }
        fetcher()
    }, [])
    const postComment =async ()=>{
        const res = await fetch("http://localhost:3000/api/comments",{
            method:"POST",
            body:JSON.stringify({comment:input}),
            headers:{
                "Content-Type":"application/josn"
            }
        })
        const data = await res.json()
        setData(data)
        setInput("")
    }
    const deleteComment =async (id)=>{
        const res = await fetch(`http://localhost:3000/api/comments/${id}`,{
            method:"DELETE"
        })
        const data = await res.json()
       
        setData(data)
        
    }
    return (
        <div style={{width:"100",maxWidth:500,margin:"20px auto"}}>
            <div>
                <Link href="/" passHref>
                    Home
                </Link>
            </div>
            <div>
                <input placeholder="write comment" value={input} onChange={(e)=>setInput(e.target.value)} />
                <button onClick={postComment}>Submit</button>
            </div>
        <div>
            {data?.map((comment,index)=>{
                return(
                    <div key={index} style={{display:"flex",alignItems:"center"}}>
                        <Link href={`/comments/${comment?.id}`} passHref>
                        <p>{comment.comment}</p>
                        </Link>
                        <p onClick={()=>deleteComment(comment?.id)}>Delete</p>
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default Comments
