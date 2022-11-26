import Image from "next/image";

function PostHeader(props) {
  const { title, image } = props;

  return (
    <header className=" grid grid-rows-3 grid-flow-col gap-10 justify-center  border-b-8 border-purple-900/30 pb-8 ">
      <h1 className=" md:text-6xl font-bold text-purple-900 capitalize md:row-span-3 md:col-span-2 xss:col-span-1 xss:text-3xl xss:row-start-2">{title}</h1>
      <Image src={image} alt={title} width={200} 
      height={150}  className=" row-start-2 row-end-4 xss:row-start-2 xss:row-end-4"/>
    </header>
  );
}

export default PostHeader;
