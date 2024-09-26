import React from 'react'
import { DeleteBtn } from '@/app/components/DeleteBtn/page';

type Props = {
    params: {
        id: number;
    };
}
type Articletype = {
    id: number;
    title: string;
    price: string
}

const getEachArticle = async (id: number) => {
    const res = await fetch(`http://localhost:3000/api/article/${id}`)
    const data = await res.json()
    console.log(data)
    return data
}



export default async function page({ params }: Props) {

    const data: Articletype = await getEachArticle(params.id)
    console.log(data)

    return (
        <div>
            <h4> you can buy the {data.title} </h4>
            <p> the price is {data.price} </p>
            <br />
            <DeleteBtn id={params.id} />
        </div>
    )
}
