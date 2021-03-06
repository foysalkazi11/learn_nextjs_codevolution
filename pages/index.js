import Head from 'next/head'
import Image from 'next/image'
import User from '../components/user/user';
import Link from 'next/link'

export  async function getStaticProps(){
   const res = await fetch("https://jsonplaceholder.typicode.com/users")
   const data = await res.json()
   return{
     props:{
       users:data
     }
   }
}

export default function Home({users}) {

  return (
    <div className="container">
      <Head>
        <title>Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{padding:"10px",border:"1px solid black"}}>
        <Link href="/blog" >
          <a>

          Blog list
          </a>
        </Link>
        <Link href="/news">
          <a>

          News list
          </a>
        </Link>
        <Link href="/events">
          <a>

          Events
          </a>
        </Link>
        <Link href="/comments">
          <a>

          comment
          </a>
        </Link>
      </div>
        {users?.length ? users?.map((user,index) =>{
          return(
            <User key={index} user={user} />
              
          )
        }) :null}
    </div>
  )
}
