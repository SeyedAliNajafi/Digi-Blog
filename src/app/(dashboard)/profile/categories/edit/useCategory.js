import { getCategoryById, updateCategory } from "@/services/categoryService";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useUpdateCategory = () => useMutation({ mutationFn: updateCategory });


export const useGetCategoryById = (id) =>
  useQuery({
    queryKey: ["get-category", id],
    queryFn: () => getCategoryById(id),
    retry: false,
    refetchOnWindowFocus: true,
  });
