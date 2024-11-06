"use client"

import React from 'react'
import style from './userForm.module.scss'
import { useRouter } from 'next/navigation'

function UserForm() {

    const router = useRouter()

    const postUser = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        const name = formData.get('name')
        const email = formData.get("email")
        const genres = formData.get("genres")
        const file = formData.get('image')
        const password = formData.get('password')

        console.log(file)

        try {
            const res = await fetch("http://localhost:3000/api/user", {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, genres, file, password })
            }
            )
            const data = await res.json()

            if (data.ok) {
                alert("you are registred, try to logi now")

                router.refresh()
                router.push("/login")
            } else {
                alert(data.message)
            }

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className={style.container} >
            <form
                onSubmit={postUser}
                className={style.formUser}
            >
                <input
                    type="text"
                    name='name'
                    placeholder='name'
                    required
                />
                <br />
                <input
                    type="email"
                    name='email'
                    placeholder='enter your Email'
                    required
                />
                <br />
                <select name="genres">
                    <option value="" disabled selected>
                        choose your genre
                    </option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
                <br />
                <input
                    type="file"
                    name='image'
                    placeholder='file'
                />
                <br />
                <input
                    type="password"
                    name='password'
                    placeholder='enter your password'
                    required
                />
                <br />
                <button className='w-7 h-3 text-black border-black'>save</button>
            </form>
        </div>
    )
}

export default UserForm