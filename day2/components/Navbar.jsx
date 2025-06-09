import Link from "next/link";

export default function Navbar(){
  return <>
  <header>
    <nav className="grid mx-8 grid-cols-2">
      <div>
        NEXTJS PROJ
      </div>
      <ul className="flex mx-auto gap-4 flex-">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/about/teams">Team</Link></li>
      </ul>
    </nav>
  </header>
  </>
}

// Sloved Commented Issue