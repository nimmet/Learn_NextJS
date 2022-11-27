import { getAllPosts } from "../../lib/posts-util";
import AllPosts from "./all-posts";




function AllPostsPage(props){

    return (
        <AllPosts posts = {props.posts}/>
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