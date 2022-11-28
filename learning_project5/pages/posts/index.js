import Head from "next/head";
import { getAllPosts } from "../../lib/posts-util";
import AllPosts from "./all-posts";




function AllPostsPage(props){

    return (
      <>
    <Head>
      <title>All Posts</title>
      <meta name="description" content="A list of programming relatated articles"/>
    </Head>
        <AllPosts posts = {props.posts}/>
      </>
    )
}

export default AllPostsPage;

export function getStaticProps(){
  const allPosts = getAllPosts()

  return {
    props: {
      posts: allPosts
    }
  }
}