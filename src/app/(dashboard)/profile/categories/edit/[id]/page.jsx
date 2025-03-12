"use client";
import Loading from "@/components/ui/Loading";
import { includeObj } from "@/utils/objectUtils";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useGetCategoryById, useUpdateCategory } from "../useCategory";
import CategoryForm from "../../add/CategoryForm";
const includesCategoryKey = ["title", "englishTitle", "description"];

function page() {
  const { id } = useParams();
  const { data, isLoading: isLoadingCategory } = useGetCategoryById(id);
  const { category } = data || {};
  const [formData, setFormData] = useState({});
  const { isLoading, mutateAsync } = useUpdateCategory();
  const router = useRouter();

  useEffect(() => {
    if (category) {
      setFormData(includeObj(category, includesCategoryKey));
    }
  }, [data]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        data: {
          ...formData,
        },
        id: category._id,
      });
      toast.success(message);
      router.push("/profile/categories");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  if (isLoadingCategory) return <Loading />;
  return (
    <div>
      <h1 className="mb-6 font-bold text-xl">ویرایش دسته بندی جدید</h1>
      <CategoryForm
        category={formData}
        handleChange={handleChange}
        isLoading={isLoading}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
export default page;
