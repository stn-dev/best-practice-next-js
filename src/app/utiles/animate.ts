"use client"

import gsap from "gsap"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

export const animatePageIn = () => {

    const bannerContainer = document.querySelector(".banner-container")
    const banner = document.querySelectorAll(".banner")

    if(banner && bannerContainer) {
        const tl = gsap.timeline()

        tl
            .set(bannerContainer , {
                position : "absolute",
                top : 0,
                left : 0
            })
            .to(banner, {
                height: 0,
                stagger: 0.1,
            })            
            .to(bannerContainer, {
                height: 0,
                duration: 0.1,
            })
    }
}

interface IAnimatePageOut {
    href : string , 
    router : AppRouterInstance
}

export const animatePageOut = (href : string , router : AppRouterInstance) => {
    const bannerContainer = document.querySelector(".banner-container")
    const banner = document.querySelectorAll(".banner")

    if(banner && bannerContainer) {
        const tl = gsap.timeline()

        tl
            .set(bannerContainer , {
                position : "absolute",
                top : 0,
                left : 0
            })
            .set(banner , {
                position : "absolute",
                top : 0,
            })
            .to(bannerContainer, {
                height: "100vh",
                duration: 0.1
            })
            .to(banner, {
                height: "100%",
                stagger: 0.1,
                onComplete : () => router.push(href)
            })
    }
}
