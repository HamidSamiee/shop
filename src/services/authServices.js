import http from "./httpServices";

export function getOtp(data) {
    return http.post('/user/get-otp', data).then(({ data }) => data.data);
}

export function checkOtp(data) {
    return http.post('/user/check-otp', data).then(({ data }) => data.data);
}

export function completeProfile(data) {
    return http.post('/user/complete-profile', data).then(({ data }) => data.data);
}

export function getUserData() {
    return http.get('/user/profile').then(({ data }) => data.data);
}

export function updateProfile(data) {
    return http.patch('/user/update', data).then(({ data }) => data.data);
}

export function logoutProfile() {
    return http.post('/user/logout');
}

// admin panel

export function getAllUsersData() {
    return http.get('/admin/user/list').then(({ data }) => data.data);
}