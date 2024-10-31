
import { postArticle } from '@/db/Article/mongoCrud'
import style from './FormDatas.module.scss'
import React, { useRef } from 'react'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { InsertManyResult } from 'mongodb'

type Datatype = {
    title: string,
    price: string
}

function formData() {

    const handleSubmit = async (formData: FormData) => {

        'use server'

        const title = formData.get('title') as string
        const price = formData.get("price") as string

        if (title && price) {

            const result = await postArticle(title, price)

            console.log(result)

            revalidatePath("/article")

            return redirect("/article")

        } else {
            alert("Missing raquired field")
            return
        }
    }

    return (
        <form
            action={handleSubmit}
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