import { Metadata, MetadataRoute } from "next";

/* sitemap is use to create a unic url, creation date , and some other property for each page */

type Articletype = {       
        id: number;
        title: string;
        price: string
}

const getArticle = async () => {
    const res = await fetch("http://localhost:3000/api/article")
    const data = await res.json()
   
    console.log(data)
    return data
}

export default async function sitemap () : Promise<MetadataRoute.Sitemap> {


 
    const articles : Articletype[] = await getArticle()

    console.log(articles)

    const article = articles.map((art) => ({
        url : `http://localhost:3000/article/${art.id}`,
        lastModified : new Date()
    }))

    // return type must be an array
    return [
        {
            // url for the entire page
            url : `http://localhost:3000`,
            lastModified : new Date()
        },
        {
            // url for the article page
            url : `http://localhost:3000/article`,
            lastModified : new Date()
        },
            // url for each article
        ...article
    ]
}