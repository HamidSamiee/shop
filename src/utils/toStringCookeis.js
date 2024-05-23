
export function toStringCookeis(cookies) {
    let strCookie = "";
    cookies.getAll().forEach(items => {
        strCookie += `${items?.name}=${items?.value}; `;
    })
    return strCookie
}