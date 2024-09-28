import React from 'react'
import { DeleteBtn } from '@/app/components/DeleteBtn/page';
import { url } from 'inspector';
import { Metadata } from 'next';

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
    return data
}

// DYNAMIC METADATA
export const generateMetadata = async ({ params }: Props): Promise<Metadata | undefined> => {
    return {
        title: `article ${params.id}`,
        description: `single article page ${params.id}`,
        openGraph: {
            title: `article ${params.id}`,
            description: `single article page ${params.id}`,
            locale: "en_US",
            siteName: "stn-dev",
            url: `http://localhost:3000/${params.id}`,
            type: "article",

            //if you have an image for each article, you can use it as a image for the opengraph
            /*
                image : params.image
            */
        }
    }
}


export default async function page({ params }: Props) {

    const data: Articletype = await getEachArticle(params.id)

    return (
        <div>
            <h4> you can buy the {data.title} </h4>
            <p> the price is {data.price} </p>
            <br />
            <DeleteBtn id={params.id} />
        </div>
    )
}
