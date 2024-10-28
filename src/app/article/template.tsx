"use client"

import React from 'react'
import { animatePageIn } from '../utiles/animate'
import { useGSAP } from '@gsap/react'
import TransitionLink from '../components/link/transitionLink'
import style from './templateArticle.module.scss'

export default function Template({ children }: { children: React.ReactNode }) {

    useGSAP(() => {
        animatePageIn()
    }, [])

    return (
        <section className={style.template} >

            <div className={style.navigation}>

                <TransitionLink
                    href='/article'
                    label='All Article'
                />

                <TransitionLink
                    href='/article/postArticle'
                    label='Add Article'
                />

            </div>

            {children}

        </section>
    )
}