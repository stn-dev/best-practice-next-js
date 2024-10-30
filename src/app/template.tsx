"use client"

import React from 'react'
import { animatePageIn } from './utiles/animate'
import { useGSAP } from '@gsap/react'
import './globals.scss'
import TransitionLink from './components/link/transitionLink'

export default function Template({ children }: { children: React.ReactNode }) {

    useGSAP(() => {
        animatePageIn()
    }, [])

    return (
        <section className='template' >
            <header>
                <nav className="navbar" >
                    <TransitionLink
                        href="/"
                        label="home"
                    />
                    <TransitionLink
                        href="/article"
                        label="article"
                    />
                    <TransitionLink
                        href="/user"
                        label="users"
                    />
                    <TransitionLink
                        href="/connexion"
                        label="connexion"
                    />
                    {/* <TransitionLink
                        href="/inscription"
                        label="inscription"
                    /> */}
                </nav>
            </header>

            <div className='banner-container'>
                <div className="banner one"></div>
                <div className="banner two"></div>
                <div className="banner three"></div>
                <div className="banner four"></div>
                <div className="banner five"></div>
            </div>

            <main>
                {children}
            </main>

            <footer>

            </footer>

        </section>
    )
}
