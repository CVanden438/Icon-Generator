import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b bg-primary-1 p-6 font-bold text-primary-6">
      <Link href="/">
        <h1>ICON APP</h1>
      </Link>
      <nav className="flex gap-6">
        <Link className="hover:text-primary-4" href="/">
          Home
        </Link>
        <Link className="hover:text-primary-4" href="/generate">
          Generate
        </Link>
        <Link className="hover:text-primary-4" href="/community">
          Community
        </Link>
      </nav>
      <button className="bg-primary-3 pl-2 pr-2 pt-1 pb-1">Login</button>
    </header>
  );
};

export default Header;
