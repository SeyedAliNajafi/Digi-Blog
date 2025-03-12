
import { addNewCategory } from "@/services/categoryService";
import { useMutation } from "@tanstack/react-query";

export const useAddCategory = () => useMutation({ mutationFn: addNewCategory });

