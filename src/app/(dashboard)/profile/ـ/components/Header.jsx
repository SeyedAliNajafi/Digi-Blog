"use client";
import Link from "next/link";
import ButtonIcon from "@/components/ui/ButtonIcon";
import { useAuth } from "@/context/AuthContext";
import Greeting from "@/components/Greeting";
import ProfilePic from "@/components/ui/ProfilePic";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";

function Header({ setIsOpen }) {
  const { user, isLoading } = useAuth();
  return (
    <header
      className={`bg-secondary-0 ${isLoading ? "bg-opacity-30 blur-md" : ""}`}
    >
      <div className="flex items-center justify-between py-5 px-4 lg:px-8">
        <div className="flex items-center gap-x-3">
          <div className="flex justify-start items-center gap-x-2">
            <span className="lg:hidden" onClick={() => setIsOpen(true)}>
              <svg
                stroke="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="h-7 w-7 text-gray-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </span>
            <div className="flex justify-center items-center flex-col lg:flex-row gap-x-2">
              <span className="text-lg lg:text-xl font-bold text-secondary-700">
                سلام؛ {user?.name}
              </span>
              <Greeting />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <ThemeSwitcher />
          <Link href="/profile">
            <ButtonIcon
              color="outline"
              className={`border-secondaray-200 rounded-2xl flex cursor-pointer items-center`}
            >
              <ProfilePic />
            </ButtonIcon>
          </Link>
        </div>
      </div>
    </header>
  );
}
export default Header;
