import React from 'react'
import style from './user.module.scss'
import { IUserType } from '@/db/Types/type'
import TransitionLink from '../components/link/transitionLink'
import { revalidatePath } from 'next/cache'
import fs from 'fs/promises'

export const getAllUser = async (): Promise<IUserType[] | undefined> => {

    try {
        const res = await fetch("http://localhost:3000/api/user", {
            next: {
                revalidate: 0
            }
        })
        const users = await res.json()
        console.log(users)

        return users.data

    } catch (error) {
        console.log(error)
    }
}

const page = async () => {

    revalidatePath("/user")

    const users = await getAllUser()


    return (
        <>
            <div className={style.container} >

                <h1>All the users</h1>

                <div
                    className={style.userListContainer}
                >
                    {
                        users?.map((user, id) => (
                            <div className={style.user} key={id}>

                                <img src={`/uploads/${user.image}`} alt="user pic" />

                                <h2>{user.name}</h2>

                                <TransitionLink
                                    href={`/user/${user._id}`}
                                    label='view'
                                />

                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default page