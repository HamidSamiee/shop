import http from "./httpServices";

export function getAllCategories() {
    return http.get('/category/list').then(({ data }) => data.data);
}