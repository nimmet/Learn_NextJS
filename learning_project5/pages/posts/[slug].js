import Head from "next/head";
import { getPostData, getPostsFiles } from "../../lib/posts-util";
import PostContent from "./post-detail/post-content";

function PostDetailPage(props){

return (
    <div className=" flex justify-center items-center my-10">
    <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
    </Head>
    <PostContent post= {props.post}/>
    </div>
)
}

export default PostDetailPage

export function getStaticProps(context){
const { params } = context
const {slug} = params

const postData = getPostData(slug)

return {
    props: {
        post: postData
    },

    revalidate: 600
}
}

export function getStaticPaths() {
    const postFileNames = getPostsFiles()

    const slugs = postFileNames.map(fileName => fileName.replace(/\.md$/, ''))

    return {
        paths:slugs.map(slug =>({params:{slug:slug}})),
        fallback:false
    }
}