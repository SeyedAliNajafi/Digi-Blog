"use client";
import Link from "next/link";
import CategoryListTable from "./CategoryListTable";
import useCategories from "@/hook/useCategory";
import Loading from "@/components/ui/Loading";
import { PlusIcon } from "@heroicons/react/24/outline";

function page() {
  const { categories, isLoading } = useCategories();

  if (isLoading) return <Loading />;
  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-xl font-bold mb-5">دسته بندی</h1>
        <Link
          href="/profile/categories/add"
          className="justify-self-end flex gap-x-4 py-3 items-center rounded-lg bg-primary-900 px-4 text-sm font-medium text-secondary-0 
      transition-colors hover:bg-primary-700"
        >
          <span className="hidden md:block">ایجاد دسته‌بندی</span>{" "}
          <PlusIcon className="w-5" />
        </Link>
      </div>
      <CategoryListTable categories={categories} />
    </div>
  );
}
export default page;
