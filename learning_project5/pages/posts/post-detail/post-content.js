import PostHeader from "./post-header"
import ReactMarkdown from "react-markdown"

const DUMMY_POST = {
    title: "getting started with nextjs",
    image: "getting-started-nextjs.png",
    content: '# This is a first post',
    date: "2022-02-10",
    slug: "getting-started-with-nextjs",
  }

function PostContent(){

    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`

    return (
        <article>
            <PostHeader title={DUMMY_POST.title} image={imagePath}/>
            <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
            
        </article>
    )

}

export default PostContent