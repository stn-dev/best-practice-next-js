"use client"

import { useRouter } from 'next/navigation'
import style from './FormDatas.module.scss'
import React, { useRef } from 'react'

type Datatype = {
    title: string,
    price: string
}

function formData() {

    // const router = useRouter()

    const ref = useRef<HTMLFormElement>(null)
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())
        console.log(data)

        if (data.title && data.price) {

            fetch("http://localhost:3000/api/article", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    title: data.title,
                    price: data.price
                })
            })
                .then(() => alert('new article posted'))
                .catch((err) => console.log(err))

            ref.current?.reset()
            router.push("/article")

        } else {
            alert("Missing raquired field")
            return
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            ref={ref}
            className={style.form}
        >
            <input
                type="text"
                name='title'
                placeholder='title'
                required
            />
            <input
                type="text"
                name='price'
                placeholder='price'
                required
            />
            <button>submit</button>
        </form>
    )
}

export default formData