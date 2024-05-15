
export default async function middlewareAuth(req) {

    // console.log(req.cookies.getAll())
    let strCookie = '';
    req.cookies.getAll().forEach(item => {
        strCookie += `${item?.name}=${item?.value}; `
    })
    // console.log(strCookie)

    const { data } = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/profile`, {
        method: "GET",
        credentials: "include",
        headers: {
            Cookie: strCookie,
        }
    }).then((res) => res.json())

    const { user } = data || {};
    // console.log(user)
    return user;
}