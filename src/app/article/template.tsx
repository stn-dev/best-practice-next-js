"use client"

import React from 'react'
import { animatePageIn } from '../utiles/animate'
import { useGSAP } from '@gsap/react'

export default function Template({ children }: { children: React.ReactNode }) {

    useGSAP(() => {
        animatePageIn()
    }, [])

    return (
        <section className='template' >
            {children}
        </section>
    )
}