'use client'

import React, { FormEvent, use, useEffect, useState } from 'react'
import style from './updateUserForm.module.scss'
import { getOneUser } from '@/db/User/userSevice'
import { useRouter } from 'next/navigation'
import { IUserType } from '@/db/Types/type'

type IdType = {
    params: { id: string }
}

type Genres = "male" | "female"



// const getUser = async (id: string) => {

//     try {
//         const user = await fetch(`http://localhost:3000/api/user/${id}`)
//         const data = await user.json()

//         return data

//     } catch (error) {
//         console.log(error)
//     }
// }


function UpdateUserForm({ params }: IdType) {

    const router = useRouter()
    const [btnText, setBtnText] = useState("save")
    const [disable, setDisable] = useState(false)
    const [user, setUser] = useState<IUserType | null>(null)


    useEffect(() => {

        const getUser = async () => {

            try {
                const user = await fetch(`http://localhost:3000/api/user/${params.id}`)
                const datas = await user.json()

                console.log('this the data content')
                console.log(datas)

                setUser(datas.data)

                return datas.data

            } catch (error) {
                console.log(error)
            }
        }

        getUser()

    }, [])



    const handleUpdate = async (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        setBtnText("updating ...")
        setDisable(true)

        const formdata = new FormData(e.currentTarget)

        const name = formdata.get("name")
        const email = formdata.get("email")
        const genres = formdata.get("genres")
        const image = formdata.get("image")
        const password = formdata.get("password")

        try {
            const res = await fetch(`http://localhost:3000/api/user/${params.id}`, {
                next: {
                    revalidate: 0
                },
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, genres, image, password })
            })

            const data = await res.json()

            console.log(data)

            if (data.ok) {
                alert(data.message)
                router.push("/user")
                router.refresh()
            } else {
                alert(data.message)
            }



            // const res = await updateUser(name as string, email as string, genres as Genres, image as File, password as string, params.id)

            // if (res.matchedCount !== 0) {
            //     revalidatePath("/user")
            //     redirect("/user")
            // } else {
            //     console.log('error occured')
            // }


        } catch (error) {
            setBtnText("save")
            setDisable(false)
            console.log(error)
        }
    }

    return (
        <div className={style.container} >
            <form
                onSubmit={handleUpdate}
                className={style.formUser}
            >
                <input
                    type="text"
                    name='name'
                    placeholder='name'
                    defaultValue={user?.name}
                    required
                />
                <br />
                <input
                    type="email"
                    name='email'
                    placeholder='enter your Email'
                    defaultValue={user?.email}
                    required
                />
                <br />
                <select name="genres" required >
                    <option defaultValue="" >
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
                    defaultValue={user?.password}
                    placeholder='enter your password'
                    required
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

export default UpdateUserForm