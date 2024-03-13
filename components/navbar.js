import Link from "next/link";
import { useState } from "react";

export default function NavBar({ }) {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <>
      <nav className="md:hidden">
        <Link className="px-4" href="/">
          <i
            onClick={() => setCollapsed(!collapsed)}
            className={`text-xl fa-solid fa-fw ${collapsed ? 'fa-bars' : 'fa-xmark'} text-white`}
          />
        </Link>
      </nav>
      <nav className={`${collapsed ? 'hidden' : 'float-nav py-1'} text-white md:block `}>
          <Link className="px-3 ft-light tracking-tighter" href="https://tradescoop.io/how-it-works">How it works</Link>
          <Link className="px-3 ft-light" href="https://tradescoop.io/ideas">Trading ideas</Link>
          <Link className="px-3 ft-light" href="https://tradescoop.io/ideas">Premium</Link>
          <Link className="px-3 ft-light" href="/">Blog</Link>
          <Link className="text-sm md:ml-10 ft-light" href="https://tradescoop.io/login">Login</Link> 
          <Link className="sign-button text-sm md:ml-4 ft-light" href="https://tradescoop.io/premium">Sign Up</Link>        
      </nav>
    </>    
  )
}
