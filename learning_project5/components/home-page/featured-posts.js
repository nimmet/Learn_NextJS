import PostsGrid from "../posts/posts-grid"

function FeaturedPosts(props) {

    return (
        <section className="bg-slate-400 flex flex-col gap-5 justify-center items-center">
            <h2 className=" text-6xl relative -top-28 font-bold text-zinc-800 xss:text-center">Featured Posts</h2>
            <PostsGrid posts={props.posts} />
        </section>
    )
}

export default FeaturedPosts