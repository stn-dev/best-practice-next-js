import React from 'react'
import style from './articleId.module.scss'
import { Metadata } from 'next';
import { DeleteBtn } from '@/app/components/(BUTTON)/Button/DeleteBtn/page';
import { getOneArticle } from '@/db/Article/mongoCrud';
import UpdateArticle from '@/app/components/(form)/UpdateArticle/page';

type Props = {
    params: {
        id: string;
    };
}
type Articletype = {
    _id: string;
    title: string;
    price: string
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
            url: `http://localhost:3000/api/article/${params.id}`,
            type: "article",

            //if you have an image for each article, you can use it as a image for the opengraph
            /*
                image : params.image
            */
        }
    }
}



export default async function page({ params }: Props) {

    const data = await getOneArticle(params.id)
    return (
        <>
            <div className={style.container} >

                <h1>{data?.title}</h1>

                <div className={style.article} >

                    <p> Are you intersted in the
                        <span>
                            {data?.title}
                        </span> ?
                    </p>

                    <p> You can buy it for
                        <span>
                            {data?.price}
                        </span>
                    </p>

                    <DeleteBtn params={params} />
                </div>

                <hr />

                <div>
                    <UpdateArticle defaultTitle={data?.title} defautlPrice={data?.price} params={params} />
                </div>

            </div>
        </>
    )

}


/* getStaticProps and getstaticPath */

// export const getStaticPaths = async () => {

//     const article: Articletype[] = await getArticle()

//     const articleId = article.map((art) => ({
//         params: { id: art.id }
//     }))

//     return { articleId, falback: false }
// }

// export const getStaticProps = async ({ params }: Props) => {
//     const { id } = params

//     const res = await fetch(`http://localhost:3000/api/article/${id}`)
//     const article: Articletype = await res.json()

//     return {
//         props: {
//             title: article.title,
//             id: article.id,
//             price: article.price
//         }
//     }
// }
