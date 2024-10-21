'use client'

import style from './deleteBtn.module.scss'
import React from "react"

type Idtype = {
    params: {
        id: string
    }
}

export const DeleteBtn = ({ params }: Idtype) => {



    const deleteArticleById = async () => {

        const conf = confirm("Are you sure to delete this article")

        if (conf) {
            const res = await fetch(`http://localhost:3000/api/article/${params.id}`, {
                method: "DELETE"
            })

            const data = await res.json()

            console.log(data)

            return
        } else {
            return
        }

    }

    return (
        <button
            onClick={deleteArticleById}
            className={style.deleteButton} >
            Delete
        </button>
    )
}