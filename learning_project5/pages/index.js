import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";
import styles from "../styles/Home.module.css";



export default function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts()

  return {
props: {
  posts: featuredPosts
},
// revalidate: 60

  }
}
