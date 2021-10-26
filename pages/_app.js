// import '../styles/globals.css'
import '../styles/custom.scss'
import Header from '../components/Header/Header'
import Footer from '../components/footer/Footer'
import Head from 'next/head'
import {Provider} from 'next-auth/client'

function MyApp({ Component, pageProps }) {

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  return(
    <Provider session={pageProps?.session}>
    <Head>
            <title>Learning next js</title>
            <meta name="descripation" content="Learning next js"  />
        </Head>
    <Header />
    <Component {...pageProps} />
    <Footer />
    </Provider>
  ) 
    
}

export default MyApp
