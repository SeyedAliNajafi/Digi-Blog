import { categoryListTableTHeads } from "@/constants/tableHeads";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { toast } from "react-hot-toast";

function  CategoryListTable({ categories }) {
  // const { mutateAsync } = useRemoveCategory();
  // const queryClient = useQueryClient();
  
  // const removeCategoryHandler = async (id) => {
  //   try {
  //     const { message } = await mutateAsync(id);
  //     toast.success(message);
  //     queryClient.invalidateQueries({ queryKey: ["get-categories"] });
  //   } catch (error) {
  //     toast.error(error?.respone?.data?.message);
  //   }
  // };
console.log(categories);

  return (
    <div className="shadow-sm overflow-auto my-8">
      <table className="border-collapse table-auto w-full min-w-[800px] text-sm">
        <thead>
          <tr>
            {categoryListTableTHeads.map((item) => {
              return (
                <th className="whitespace-nowrap table__th" key={item.id}>
                  {item.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-slate-700">
          {categories.map((category, index) => {
            return (
              <tr key={category._id}>
                <td className="table__td">{index + 1}</td>
                <td className="table__td  whitespace-nowrap font-bold">
                  {category.label}
                </td>
                <td className="table__td">{category.description}</td>
                <td className="table__td">{category.englishTitle}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default CategoryListTable;
