import Link from "next/link";
import Logo from "./logo";

function MainNavigation() {
  return (
    <header className=" absolute text-white flex justify-around items-center gap-5 top-5 xss:left-5 xss:right-5 left-16 right-16 lg:right-24 lg:left-24">
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
