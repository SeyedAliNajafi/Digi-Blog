"use client";
import Link from "next/link";
import { useState } from "react";

async function CateogryList() {
  const [isOpen, setIsOpen] = useState(false);
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/list`);
  // await new Promise((resolve) => setTimeout(() => resolve(), 2000));
  const {
    data: { categories },
  } = await res.json();

  return (
    <div>
      <div
        className="flex justify-between lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Link
          className="hover:bg-primary-900 hover:text-white w-fit p-2 rounded-xl hover:scale-105 transition-all"
          href={`/blogs/`}
        >
          همه
        </Link>
        <span className="size-4">
          {isOpen ? (
            <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          )}
        </span>
      </div>
      <ul
        className={`space-y-4 transition-all duration-150 lg:block lg:opacity-100 lg:visible  ${
          isOpen ? "max-h-fit opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Link
          className="hover:bg-primary-900 hover:text-white w-fit p-2 rounded-xl hover:scale-105 transition-all hidden lg:block"
          href={`/blogs/`}
        >
          همه
        </Link>
        {categories.map((category) => {
          return (
            <li
              key={category._id}
              className="hover:bg-primary-900 hover:text-white w-fit p-2 rounded-xl hover:scale-105 transition-all"
            >
              <Link href={`/blogs/category/${category.slug}`}>
                {category.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default CateogryList;
