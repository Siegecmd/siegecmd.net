import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const linkStyle = (path) =>
    `text-sm transition-opacity duration-200 opacity-90 hover:opacity-100 hover:underline ${
      pathname === path ? "font-semibold text-white underline" : "text-gray-200"
    }`;

  return (
    <nav className="sticky top-4 z-50 mx-auto bg-glass-black border border-glass backdrop-blur-sm shadow-glass rounded-full px-6 py-2 flex gap-6 justify-center w-fit text-white">
      <Link to="/" className={linkStyle("/")}>
        Home
      </Link>
      {/* <Link to="/blog" className={linkStyle('/blog')}>Blog</Link> */}
      <Link to="/typing" className={linkStyle("/typing")}>
        Typing
      </Link>
    </nav>
  );
}
