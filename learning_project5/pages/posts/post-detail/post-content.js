import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";

const DUMMY_POST = {
  title: "getting started with nextjs",
  image: "getting-started-nextjs.png",
  content: "# This is a first post",
  date: "2022-02-10",
  slug: "getting-started-with-nextjs",
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className=" sm:w-[900px] bg-neutral-200
    rounded-md py-5 px-5  xss:w-[550px] xss:mx-2">
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown className=" text-2xl font-bold my-5">
        {DUMMY_POST.content}
      </ReactMarkdown>
    </article>
  );
}

export default PostContent;
