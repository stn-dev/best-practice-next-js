'use client'


import React from "react"

type Idtype = {
    params: {
        id: string
    }
}

export const DeleteBtn = ({ params }: Idtype) => {

    const deleteArticleById = async () => {

        const res = await fetch(`http://localhost:3000/api/article/${params.id}`, {
            method: "DELETE"
        })

        const data = await res.json()

        console.log(data)

        return

    }

    return (
        <button
            onClick={deleteArticleById}
            className="rounded shadow-xl bg-blue-200 p-1 :hover-bg-blue-400 text-bold text-lg" >
            delete
        </button>
    )
}