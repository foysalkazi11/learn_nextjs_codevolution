import React from 'react'
import Footer from '../footer/Footer';
import Head from 'next/head'

const Login = () => {
    return (
        <>
        <Head>
            <title>Login page</title>
            <meta name="descripation" content="Login first"  />
        </Head>
        <div className="loginContainer">
            <h2>Login Page</h2>
        </div>
        </>
    )
}

export default Login

Login.getLayout = function PageLayout (page){
    return(
        <>
        {page}
        <Footer />
        </>
    )
}
