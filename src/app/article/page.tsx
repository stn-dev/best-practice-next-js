import { Metadata } from 'next'
import React from 'react'
import TransitionLink from '../components/link/transitionLink';
import style from './article.module.scss'
import { revalidatePath } from 'next/cache';

type Props = {}

export const getArticle = async () => {
    const res = await fetch("http://localhost:3000/api/article", {
        next: {
            revalidate: 0
        }
    })
    const data = await res.json()
    return data
}

type Articletype = {
    _id: string;
    title: string;
    price: string
}

export const metadata: Metadata = {
    title: "articles",
    description: "find all article in this page"
}

export default async function page({ }: Props) {
    revalidatePath("/article")
    const { data } = await getArticle()
    console.log(data)
    return (
        <>
            <div className={style.container} >

                <h2>ALL ARTICLES LIST</h2>
                <ul className={style.listContainer} >
                    {
                        data.map((article: Articletype) => {
                            return (
                                <li key={article._id} >
                                    <TransitionLink href={`/article/${article._id}`} label={article.title} />
                                </li>
                            )
                        })
                    }
                </ul>
                <br />
            </div>
        </>
    )
}