"use client";

import NavLink from "./NavLink";
import { useAuth } from "@/context/AuthContext";
import Logo from "./ui/Logo";
import Link from "next/link";
import ProfilePic from "./ui/ProfilePic";
import ThemeSwitcher from "./ui/ThemeSwitcher";

const navLinks = [
  {
    id: 2,
    children: "بلاگ ها",
    path: "/blogs",
  },
];

function Header() {
  const { user, isLoading } = useAuth();

  return (
    <header
      className={`z-10 shadow-md bg-inherit mb-10 sticky top-0 transition-all duration-200 border-b border-b-secondary-300 ${
        isLoading ? "blur-sm opacity-70" : "opacity-100 blur-0"
      }`}
    >
      <nav className="container xl:max-w-screen-xl">
        <ul className="flex items-center text-secondary-400 justify-between py-2">
          <div className="flex items-center gap-x-4 md:gap-x-10">
            <Link href="/">
              <Logo />
            </Link>
            {navLinks.map((navLink) => {
              return (
                <li key={navLink.id}>
                  <NavLink path={navLink.path}>{navLink.children}</NavLink>
                </li>
              );
            })}
          </div>
          <div className="flex gap-x-4 items-center">
            <ThemeSwitcher />
            {user ? (
              <NavLink path="/profile">
                <ProfilePic />
              </NavLink>
            ) : (
              <Link href="/signin">
                <div className="flex gap-x-2 bg-primary-900 px-2 py-2.5 rounded-3xl text-white hover:text-primary-900 hover:bg-white transition-all duration-500 shadow-lg">
                  <svg
                    className="size-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
                  </svg>
                  <p>ورود</p>
                </div>
              </Link>
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
