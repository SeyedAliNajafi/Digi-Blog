"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useAddCategory } from "./useAddCategory";
import CategoryForm from "./CategoryForm";

function page() {
  const [category, setCategory] = useState({
    title: "",
    description: "",
    englishTitle: "",
  });
  const router = useRouter();
  const { isLoading, mutateAsync } = useAddCategory();
  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        ...category,
      });
      toast.success(message);
      router.push("/profile/categories");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div>
      <h1 className="mb-6 font-bold text-xl">افزودن دسته بندی جدید</h1>
      <CategoryForm
        category={category}
        handleChange={handleChange}
        isLoading={isLoading}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
export default page;
