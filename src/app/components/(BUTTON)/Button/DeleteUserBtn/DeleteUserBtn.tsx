"use client"

import React from 'react'
import style from "./DeleteUser.module.scss"
import { useRouter } from 'next/navigation'


type Props = {
    params: { id: string }
}

async function DeleteUserBtn({ params }: Props) {

    const router = useRouter()

    const handleDelete = async () => {

        const conf = confirm('Are you sure to delete this user?')

        try {
            if (conf) {
                const res = await fetch(`http://localhost:3000/api/user/${params.id}`, {
                    next: {
                        revalidate: 0
                    },
                    method: "DELETE"
                },
                )

                if (res.ok) {
                    alert("user deleted")
                    router.push("/user")
                } else {
                    alert("error occuring, user not deleted")
                }
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <button
            className={style.deleteBtn}
            onClick={handleDelete}
        >
            DELETE
        </button>
    )
}

export default DeleteUserBtn