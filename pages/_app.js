// import '../styles/globals.css'
import '../styles/custom.scss'
import Header from '../components/Header/Header'
import Footer from '../components/footer/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  return(
    <>
    <Head>
            <title>Learning next js</title>
            <meta name="descripation" content="Learning next js"  />
        </Head>
    <Header />
    <Component {...pageProps} />
    <Footer />
    </>
  ) 
    
}

export default MyApp
