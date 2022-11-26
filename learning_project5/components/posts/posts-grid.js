import PostItem from "./post-item";

function PostsGrid(props) {
  const { posts } = props;
  return (
    <ul className=" grid sm:grid-cols-3 gap-8 justify-center items-center sm:mx-20 mb-10 xss:grid-cols-1 xss:mx-5 ">
      {posts.map((post) => (
        <PostItem key={post.slug} post={post}/>
      ))}
    </ul>
  );
}

export default PostsGrid;
