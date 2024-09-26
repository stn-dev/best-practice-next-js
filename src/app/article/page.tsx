import Link from 'next/link'
import React from 'react'

type Props = {}

const getArticle = async () => {
    const res = await fetch("http://localhost:3000/api/article", {
        next: {
            revalidate: 0
        }
    })
    const data = await res.json()
    console.log(data)
    return data
}

type Articletype = {
    id: number;
    title: string;
    price: string
}

export default async function page({ }: Props) {
    const articles: Articletype[] = await getArticle()
    console.log(articles)
    return (
        <div>
            <ul>
                {
                    articles.map((article) => {
                        return (
                            <li key={article.id} >
                                <Link href={`/article/${article.id}`} > {article.title} </Link>
                                <br />
                            </li>
                        )
                    })
                }
            </ul>
            <br />
            <Link href="/article/postArticle" >post article</Link>
        </div>
    )
}