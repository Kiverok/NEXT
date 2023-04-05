import '../styles/globals.scss'
import Image from 'next/image';
import Head from "next/head";
import youtubeImg from "../public/youtube.png";
import Layout from '../components/Layout'

const MyApp = ({ Component, pageProps }) => {
  return ( 
  <Layout>
    <Head>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
    </Head>
    <main>
      <Component {...pageProps} />
    </main>
    <Image
    src={youtubeImg}
    layout="responsive"
    alt="preview"
    placeholder="blur"
    />
    </Layout>
  )
}

export default MyApp
