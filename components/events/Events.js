import React,{useState} from 'react'
import Link from 'next/link';
import {useRouter} from 'next/router'
const Events = ({events}) => {
    const [event,setEvent] = useState(events)
    const router = useRouter()
    const filterCategroy =async categroy =>{
        const res = await fetch(`http://localhost:5000/events?categroy=${categroy}`)
        const data = await res.json()
        if (data.length) {
            setEvent(data)
            router.push(`/events?categroy=${categroy}`,undefined,{shallow:true})
        }
    }
    return (
        < >
            <button onClick={()=>setEvent(events)}>Show list</button>
            {event?.map((item,index)=>{
                return (
                    <div key={index} style={{border:"1px solid black",padding:"5px",margin:"5px",display:'flex',alignItems:"center",justifyContent:"center",width:"100%"}}>
                        {/* <Link href={`/events/${item?.id}`} passHref> */}
                        <div>
                        <p>{item?.title}</p>
                        <p>{item?.categroy}</p>
                        </div>
                        <button onClick={()=>filterCategroy(item?.categroy)}>Filter categroy</button>
                    {/* </Link> */}
                    </div>
                )
            })}
            
           
        </>
    )
}

export default Events
