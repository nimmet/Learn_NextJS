import PostsGrid from "../../components/posts/posts-grid";

function AllPosts(props){

    return (
        <section className=" flex flex-col justify-center items-center gap-5 bg-neutral-200">
            <h1  className=" text-6xl font-bold my-12">All Posts</h1>
            <PostsGrid posts = {props.posts}/>
        </section>
    )

}

export default AllPosts;