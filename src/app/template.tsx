"use client"

import React, { useState } from 'react'
import { animatePageIn } from './utiles/animate'
import { useGSAP } from '@gsap/react'
import './globals.scss'
import TransitionLink from './components/link/transitionLink'
import { useRouter } from 'next/navigation'

export default function Template({ children }: { children: React.ReactNode }) {

    const [token, setToken] = useState('')
    const router = useRouter()

    const removeToken = () => {
        if (confirm("Are you sure to log out?")) {
            localStorage.removeItem('token')
            router.push("/login")
            router.refresh()
        } else {
            return
        }
    }

    useGSAP(() => {
        animatePageIn()
        setToken(localStorage.getItem("token") as string)
    }, [])

    return (
        <section className='template' >
            <header>
                <nav className="navbar" >

                    <div className="links">
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
                    </div>
                    <div className="button-links">

                        {
                            !token

                                ?
                                (
                                    <div className='button-container'>
                                        <TransitionLink href='/register' label='Sing up' />
                                        <TransitionLink href='/login' label='Login' />
                                    </div>
                                )
                                :
                                (
                                    <button
                                        className='log-out-btn'
                                        onClick={removeToken}
                                    >
                                        Log out
                                    </button>
                                )
                        }

                    </div>
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
