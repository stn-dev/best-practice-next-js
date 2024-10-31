'use client'

import React from 'react'
import style from './goBack.module.scss'
import { useRouter } from 'next/navigation'
import { animatePageOut } from '@/app/utiles/animate'

type Props = {}

function GoBack({ }: Props) {
    const router = useRouter()

    const backWard = () => {
        router.back()
    }
    return (
        <div className={style.container} onClick={backWard}>
            <img src="/arrow-narrow-left.svg" alt="" />
        </div>
    )
}

export default GoBack