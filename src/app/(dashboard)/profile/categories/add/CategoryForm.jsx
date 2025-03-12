import Loading from "@/components/ui/Loading";
import TextField from "@/components/ui/TextField";
import React from "react";

function CategoryForm({ onSubmit, category, handleChange, isLoading }) {
  return (
    <div className="max-w-sm mb-10">
      <form className="space-y-4 bg-white p-4 rounded-lg" onSubmit={onSubmit}>
        <TextField
          name="title"
          label="عنوان"
          value={category.title || ""}
          onChange={handleChange}
        />
        <TextField
          name="englishTitle"
          label="عنوان انگلیسی"
          value={category.englishTitle || ""}
          onChange={handleChange}
        />
        <TextField
          name="description"
          label="توضیحات"
          value={category.description || ""}
          onChange={handleChange}
        />
        <div className="mt-2">
          {isLoading ? (
            <Loading />
          ) : (
            <button className="btn btn--primary w-full">تایید</button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CategoryForm;
