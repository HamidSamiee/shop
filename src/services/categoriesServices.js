import http from "./httpServices";

export function getAllCategories() {
    return http.get('/category/list').then(({ data }) => data.data);
}

export function getCategoryById(id) {
    return http.get(`/category/${id}`).then(({ data }) => data.data);
}

export function addCategory(data) {
    return http.post('/admin/category/add', data).then(({ data }) => data.data);
}

export function deleteCategory(id) {
    return http.delete(`/admin/category/remove/${id}`).then(({ data }) => data.data);
}

export function updateCategory({ categoryId, data }) {
    return http.patch(`/admin/category/update/${categoryId}`, data).then(({ data }) => data.data);
}