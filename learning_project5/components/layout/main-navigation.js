import Link from "next/link";
import Logo from "./logo";

function MainNavigation() {
  return (
    <header className=" text-white flex justify-around items-center gap-5 xss:left-5 xss:right-5 right-24 left-24 h-16 bg-zinc-700 px-10">
      <Link href="/" className=" flex-1">
        <Logo />
      </Link>

      <nav className="">
        <ul className=" flex gap-5">
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation;
