import PostItem from "./post-item"


function PostsGrid(props) {
    const {posts} = props
    return (
        <ul>
    {posts.map(post=> <PostItem/>)}
        </ul>
    )
}

export default PostsGrid