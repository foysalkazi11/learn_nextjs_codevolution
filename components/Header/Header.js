import React from 'react';
import Link from 'next/link'
import {signIn,signOut,useSession} from 'next-auth/client'

const Header = () => {
    const [session,loaging] = useSession()
    
    return (
        <div className="headerContainer">
           <div className="innerContainer">
           <h1>Header</h1>
            <div className={!session && loaging ? "loading" : "loaded"}>
                <Link href="/">
                <a>Home</a>
                </Link>

                <Link href="/blog">
                <a>Blog</a>
                </Link>

                <Link href="/news">
                <a>News</a>
                </Link>

                <Link href="/comments">
                <a>Comments</a>
                </Link>

                <Link href="/dashboard">
                <a>Dashboard</a>
                </Link>

                {!loaging && !session && 
                <Link href="/api/auth/signin">
                <a onClick={e=>{
                    e.preventDefault()
                    signIn()
                }}>Login</a>
                </Link>}

                {session && <Link href="/api/auth/signout">
                <a onClick={e=>{
                    e.preventDefault()
                    signOut()
                }}>Log Out</a>
                </Link>}

                

            </div>
           </div>
        </div>
    )
}

export default Header


// import { useSession, signIn, signOut } from "next-auth/react"

// export default function Component() {
//   const { data: session } = useSession()
//   if(session) {
//     return <>
//       Signed in as {session.user.email} <br/>
//       <button onClick={() => signOut()}>Sign out</button>
//     </>
//   }
//   return <>
//     Not signed in <br/>
//     <button onClick={() => signIn()}>Sign in</button>
//   </>
// }