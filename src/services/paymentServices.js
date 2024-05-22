import http from "./httpServices";

export function createPayment() {
    return http.post('/payment/create').then(({ data }) => data.data);
}

export function getPaymentData() {
    return http.get('/admin/payment/list').then(({ data }) => data.data);
}