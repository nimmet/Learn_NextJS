import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
     <h1 className='font-bold italic text-2xl text-center my-24 '>Hello NextJS</h1>
    </div>
  )
}
