import http from "./httpServices";

export function getAllCoupon() {
    return http.get('/admin/coupon/list').then(({ data }) => data.data);
}

export function getCouponById(id) {
    return http.get(`/admin/coupon/${id}`).then(({ data }) => data.data);
}

export function addCoupen(data) {
    return http.post('/admin/coupon/add', data).then(({ data }) => data.data);
}

export function updateCoupen({ couponId, data }) {
    return http.patch(`/admin/coupon/update/${couponId}`, data).then(({ data }) => data.data);
}

export function deleteCoupen(id) {
    return http.delete(`/admin/coupon/remove/${id}`).then(({ data }) => data.data);
}