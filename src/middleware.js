
import { NextResponse } from "next/server";
import middlewareAuth from "./utils/middlewareAuth";

export default async function middleware(req) {

    const url = req.url;
    const pathname = req.nextUrl.pathname;
    // console.log({ 'url': url, 'pathname': pathname })
    // console.log(req.cookies.get("accessToken"))

    if (pathname.startsWith('/profile')) {

        const user = await middlewareAuth(req);

        if (!user) return NextResponse.redirect(new URL('/auth', url))

        // console.log("this is profile panel")
    }

    if (pathname.startsWith('/admin')) {

        const user = await middlewareAuth(req);

        if (!user) return NextResponse.redirect(new URL('/auth', url))

        if (user && user.role !== "ADMIN")
            return NextResponse.redirect(new URL("/profile", req.url));
        // console.log("this is admin panel")
    }
}

export const config = {
    matcher: ["/admin/:path*", "/profile/:path*"],
}