"use client"

import { useRouter } from 'next/router'
import React, { useRef } from 'react'
// import { handler } from '@/app/api/article/route'

type Datatype = {
    title: string,
    price: string
}

function formData() {

    // const router = useRouter()

    const ref = useRef<HTMLFormElement>(null)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())
        console.log(data)

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

        ref.current?.reset()

    }

    return (
        <form onSubmit={handleSubmit} ref={ref}>
            <input type="text" name='title' placeholder='title' />
            <input type="text" name='price' placeholder='price' />
            <button>submit</button>
        </form>
    )
}

export default formData