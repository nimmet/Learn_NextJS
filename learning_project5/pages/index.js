import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import FeaturedPosts from '../components/home-page/featured-posts'
import Hero from '../components/home-page/hero'
import styles from '../styles/Home.module.css'

export default function HomePage() {
  return (
   <Fragment>
   <Hero/>
   </Fragment>
  )
}
