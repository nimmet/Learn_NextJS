import AllPosts from "./all-posts";


const DUMMY_POSTS = [
    {
      title: "getting started with nextjs",
      image: "getting-started-nextjs.png",
      excerpt:
        "Nextjs is a the React framework for production. it makes building fullstack React apps and sites a breeze.",
      date: "2022-02-10",
      slug: "getting-started-with-nextjs",
    },
  
    {
      title: "getting started with nextjs",
      image: "getting-started-nextjs.png",
      excerpt:
        "Nextjs is a the React framework for production. it makes building fullstack React apps and sites a breeze.",
      date: "2022-02-10",
      slug: "getting-started-with-nextjs2",
    },
  
    {
      title: "getting started with nextjs",
      image: "getting-started-nextjs.png",
      excerpt:
        "Nextjs is a the React framework for production. it makes building fullstack React apps and sites a breeze.",
      date: "2022-02-10",
      slug: "getting-started-with-nextjs3",
    },
    {
      title: "getting started with nextjs",
      image: "getting-started-nextjs.png",
      excerpt:
        "Nextjs is a the React framework for production. it makes building fullstack React apps and sites a breeze.",
      date: "2022-02-10",
      slug: "getting-started-with-nextjs4",
    },
  
   
  ];

function AllPostsPage(){

    return (
        <AllPosts posts = {DUMMY_POSTS}/>
    )
}

export default AllPostsPage;