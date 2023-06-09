import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import {Menu} from "@/componentes/Menu";

export default function Home() {
  return (
      <>
          <Head>
            <title>Loja Next</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Menu/>
          <main className={styles.main}>
            <h1 className={styles.title}>Página Inicial</h1>
            <div className="container">
            </div>
          </main>
      </>
  )
}