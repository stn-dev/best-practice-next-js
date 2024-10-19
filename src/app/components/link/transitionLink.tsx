'use client'

import style from './transitionLink.module.scss'
import { animatePageOut } from '@/app/utiles/animate'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

type Props = {
    href: string,
    label: string
}

function TransitionLink({ href, label }: Props) {

    const pathname = usePathname()
    const router = useRouter()

    let active = false

    if (pathname === href) {
        active = true
    }

    const handleClick = () => {
        if (pathname !== href) {
            animatePageOut(href, router)
        }
    }

    return (
        <button
            onClick={handleClick}
            className={active ? style.btnActive : style.linkButton}
        >
            {label}
        </button>

    )
}

export default TransitionLink