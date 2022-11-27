import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";

function PostContent(props) {
  const {post} = props

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className=" sm:w-[900px] bg-neutral-200
    rounded-md py-5 px-5  xss:w-[550px] xss:mx-2">
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown className=" text-2xl font-bold my-5">
        {post.content}
      </ReactMarkdown>
    </article>
  );
}

export default PostContent;
