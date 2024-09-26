"use client"

import { redirect } from "next/navigation"


type Idtype = {
    id: number
}

export const DeleteBtn = ({ id }: Idtype) => {

    const deleteArticle = async () => {

        await fetch(`http://localhost:3000/api/article/${id}`, {
            method: "DELETE"
        }).then(() => redirect("/article"))
    }

    return (
        <button onClick={deleteArticle} className="rounded shadow-xl bg-blue-200 p-1 :hover-bg-blue-400 text-bold text-lg" > delete </button>
    )
}