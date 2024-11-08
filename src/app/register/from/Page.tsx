"use client"

import React from 'react'
import style from './userForm.module.scss'
import { useRouter } from 'next/navigation'
import UploadFiile from '@/app/components/UploadFile/UploadFiile'
import { v4 as uuidv4 } from 'uuid'

function UserForm() {

    const router = useRouter()

    const postUser = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        const name = formData.get('name')
        const email = formData.get("email")
        const genres = formData.get("genres")
        const file = formData.get('image') as File
        const password = formData.get('password')

        formData.append('file', file)

        const myFileName = `${uuidv4()}_${file.name}`


        try {

            const imageRes = await fetch(`http://localhost:3000/api/user/uploadImage?fileName=${myFileName}`, {
                next: {
                    revalidate: 0
                },
                method: "POST",
                body: formData
            })

            const result = await imageRes.json()



            const res = await fetch("http://localhost:3000/api/user?filename=1235464aabbc12354-js.png", {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, genres, image: myFileName, password })
            }
            )
            const data = await res.json()

            if (data.ok && result.ok) {
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

                <UploadFiile />

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
                    <option defaultValue="" >
                        choose your genre
                    </option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
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