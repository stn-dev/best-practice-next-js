import { NextResponse } from "next/server"

export const middleware = (req) => {

    // const path = req.nextUrl.pathname

    // const publicPath = path === "/" || path === "/login" || path === '/register'

    // const token = localStorage.getItem('token')

    // if (publicPath && token) {
    //     NextResponse.redirect(new URL('/', req.nextUrl))
    // }

    // if (!publicPath && !token) {
    //     NextResponse.redirect(new URL('/login', req.nextUrl))
    // }
    console.log("log from middleware")
}

export const confid = {
    matcher: [
        '/',
        "/login",
        "/register",
        "/article/:path*",
        "/user/:path*"
    ]
}