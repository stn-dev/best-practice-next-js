// "use client"

import style from './updateArticle.module.scss'
import React, { useRef } from 'react'
import { useRouter } from 'next/navigation'
import { updateArticle } from '@/db/Article/mongoCrud'
import { revalidatePath } from 'next/cache'

type Props = {
    params: {
        id: string
    },
    defaultTitle: string,
    defautlPrice: string,
}

export default async function UpdateArticle({ params, defaultTitle, defautlPrice }: Props) {

    const handleUpdate = async (formData: FormData) => {

        'use server'

        const title = formData.get('title') as string
        const price = formData.get('price') as string

        await updateArticle(params.id, title, price)

        return revalidatePath(`/article/${params.id}`)
    }

    return (
        <div className={style.container} >
            <h2>update your article</h2>

            <form
                action={handleUpdate}
                className={style.form}
            >
                <input
                    type="text"
                    placeholder='new title'
                    name='title'
                    defaultValue={defaultTitle}
                />
                <br />
                <input
                    type="text"
                    placeholder='new price'
                    name='price'
                    defaultValue={defautlPrice}
                />
                <br />
                <button>save</button>
            </form>
        </div>
    )
}