"use client"

import React, { FormEvent, useState } from 'react'
import style from './loginFrom.module.scss'
import { useRouter } from 'next/navigation'


const LoginForm = () => {

    const [btnText, setBtnText] = useState("submit")
    const [disable, setDisable] = useState(false)
    const router = useRouter()

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setBtnText("submitting ...")
        setDisable(true)

        const formData = new FormData(e.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')

        try {
            const response = await fetch("http://localhost:3000/api/user/login", {
                next: {
                    revalidate: 0,
                },
                method: "POST",
                headers: {
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify({ email, password })
            })

            const data = await response.json()

            if (response.ok) {
                localStorage.setItem("token", `${data.data._id} ${data.data.email} ${data.data.genres} ${data.data.name} ${data.data.password}`)

                router.push("/")
                router.refresh()

                return
            } else {
                alert(data.message as string)
            }


        } catch (error) {
            setBtnText("submit")
            setDisable(false)
            console.log(error)
        }
    }

    return (
        <div className={style.container} >
            <form
                onSubmit={handleLogin}
                className={style.formUser}
            >
                <input
                    type="email"
                    name='email'
                    placeholder='Enter your email'
                    required
                />
                <br />
                <input
                    type="password"
                    name='password'
                    placeholder='Enter your password'
                />
                <br />
                <button
                    disabled={disable}
                    className='w-7 h-3 text-black border-black'>
                    {btnText}
                </button>
            </form>
        </div>
    )
}

export default LoginForm