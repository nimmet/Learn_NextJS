import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import styles from "../styles/Home.module.css";

const DUMMY_POSTS = [
  {
    title: "getting started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Nextjs is a the React framework for production. it makes building fullstack React apps and sites a breeze.",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs",
  },

  {
    title: "getting started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Nextjs is a the React framework for production. it makes building fullstack React apps and sites a breeze.",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs2",
  },

  {
    title: "getting started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Nextjs is a the React framework for production. it makes building fullstack React apps and sites a breeze.",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs3",
  },
  {
    title: "getting started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Nextjs is a the React framework for production. it makes building fullstack React apps and sites a breeze.",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs4",
  },

 
];

export default function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}
