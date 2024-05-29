import http from "./httpServices";

export function getAllProducts(qs, cookies) {
    return http.get(`/product/list?${qs}`,
        {
            headers: {
                cookie: cookies,
            }
        }
    ).then(({ data }) => data.data);

    // return fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/list?${qs}`, {
    //     cache: "no-store",
    // })
    //     .then((res) => res.json())
    //     .then(({ data }) => data);
}

export function getProductBySlug(slug) {
    return http.get(`/product/slug/${slug}`).then(({ data }) => data.data);
}

export function likeProduct(id) {
    return http.post(`/product/like/${id}`).then(({ data }) => data.data);
}

// admin services
export function addProdcut(data) {
    return http.post(`/admin/product/add`, data).then(({ data }) => data.data);
}

export function removeProdcut(id) {
    return http.delete(`admin/product/remove/${id}`).then(({ data }) => data.data);
}

export function getProductById(id) {
    return http.get(`/product/${id}`).then(({ data }) => data.data);
}

export function updateProduct({ productId, data }) {
    return http.patch(`/admin/product/update/${productId}`, data).then(({ data }) => data.data);
}