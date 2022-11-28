import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

function PostContent(props) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    // image(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },

    paragraph(txt) {
      const { node } = txt;
      if (node.children[0].type === "image") {
        const img = node.children[0];
        return (
          <div className=" mx-auto my-2 w-[300px] h-[200px]">
            <Image
              src={`/images/posts/${post.slug}/${image.url}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p className=" text-xl font-normal">{txt.children}</p>;
    },

    // code(code) {
    //   const { language, value } = code;
    //   return (<SyntaxHighlighter style={atomDark} language={language} children={value} />);
    // },
  };

  return (
    <article
      className=" sm:w-[900px] bg-neutral-200
    rounded-md py-5 px-5  xss:w-[550px] xss:mx-2"
    >
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown
        className=" text-xl font-[500] my-5 overflow-clip"
        components={customRenderers}
      >
        {post.content}
      </ReactMarkdown>
    </article>
  );
}

export default PostContent;
