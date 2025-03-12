import http from "./httpService";

export function getCategoryById(id) {
  return http.get(`/category/${id}`).then(({ data }) => data.data);
}

export async function getCategoryApi() {
  return http.get("/category/list").then(({ data }) => data.data);
}
export function addNewCategory(data) {
  return http.post("/category/add", data).then(({ data }) => data.data);
}

export function updateCategory({ id, data }) {
  return http
    .patch(`/admin/category/update/${id}`, data)
    .then(({ data }) => data.data);
}

const categoryApi = {
  getCategoryApi,
};

export default categoryApi;
