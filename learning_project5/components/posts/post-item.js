import Image from "next/image";
import Link from "next/link";

function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className=" rounded-sm shadow-xl shadow-slate-200/70">
      <Link href={linkPath}>
        <div className=" ">
          <Image
            src={imagePath}
            alt={title}
            width={300}
            height={200}
            layout="responsive"
            className=" rounded-t-sm"
          />
        </div>
        <div className=" text-white bg-zinc-800 flex flex-col justify-center items-center gap-4 p-5">
          <h3 className=" text-xl capitalize font-bold">{title}</h3>
          <time className=" italic">{formattedDate}</time>
          <p className="text-center">{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}

export default PostItem;
