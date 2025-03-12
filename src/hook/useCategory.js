import { getCategoryApi } from "@/services/categoryService";
import { useQuery } from "@tanstack/react-query";

export default function useCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoryApi,
  });

  // {_id, title, enTitle, ....}
  const { categories: rawCategories = [] } = data || {};

  // {value, label}
  const categories = rawCategories.map((item) => ({
    label: item.title,
    value: item._id,
    englishTitle: item.englishTitle,
    description: item.description,
  }));

  const transformedCategories = rawCategories.map((item) => ({
    label: item.title,
    value: item.englishTitle,
  }));

  return { isLoading, categories, transformedCategories };
}
