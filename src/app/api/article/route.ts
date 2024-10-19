import {getAllArticles, postArticle} from "@/db/Article/mongoCrud";
import { NextResponse } from "next/server";


export async function POST (req : Request) {

    if(!process.env.MONGODB_URI) {
        NextResponse.json(
            {error : "DATABASE_URL not existing"},
            {status: 500 }
        )
    }

   try {

    const {title , price} = await req.json()

    if(title === "" || price === "") {
        return NextResponse.json(
            {error : "some information are missing"},
            {status: 400 }
        )
    }

    const data = await postArticle(title , price)

    console.log("article posted")

    return NextResponse.json(
        {
            ...data,
            message : "Article created succefully"
        },
        {status : 201}
    )  

   } catch (error) {
    console.log(error)

    return NextResponse.json(
        {error : "server error"},
        {status : 500}
    )
   }

}

export async function GET( req : Request) {

    if(!process.env.DATABASE_URL) {
        NextResponse.json(
            {error : "DATABASE_URL not existing"},
            {status: 500 }
        )
    }

    try {

        const data = await getAllArticles()

        return NextResponse.json(
            {
                data
            } ,
            {status : 200}
        )

    } catch (error) {
        console.log(error)

        return NextResponse.json(
            {error : "server error"},
            {status : 500}
        )
    }
}






