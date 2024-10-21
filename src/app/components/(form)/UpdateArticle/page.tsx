import style from './updateArticle.module.scss'
import React, { useRef } from 'react'

type Props = {
    params: {
        id: string
    },
    defaultTitle: string,
    defautlPrice: string,
}

export default async function UpdateArticle({ params, defaultTitle, defautlPrice }: Props) {

    const handleUpdate = async (formdata: FormData) => {
        "use server"
        console.log("server action")
        const title = formdata.get("title") as string
        const price = formdata.get("price") as string

        await fetch(`http://localhost:3000/api/article/${params.id}`, {
            next: {
                revalidate: 0
            },
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                price
            })
        })
            .catch((err) => console.log(err))
            .then(() => alert("article updated"))

        return
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