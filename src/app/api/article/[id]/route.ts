import { deleteArticle, updateArticle } from "@/db/Article/mongoCrud"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"

type RouteParams = {
    params : {
        id: string
    }
}

export async function DELETE(req : Request , {params}:RouteParams) {
    
    console.log("delete")

    if(req.method !== "DELETE") {
        return NextResponse.json(
            {error : "method not alowed"},
            {status : 405}
        )
    }

    if(!process.env.MONGODB_URI) {

       return  NextResponse.json(
            {error : "DATABASE_URL not existing"},
            {status: 500 }
        )
    }

    if(!params.id || !ObjectId.isValid(params.id)) {
        return NextResponse.json(
            {message : "ID not valie"},
            {status : 400}
        )
    }

    try {

        const result = await deleteArticle(params.id)

        if(result.deletedCount === 0) {
            return NextResponse.json(
                {message : "article not found"},
                {status : 404}
            )
        }

        return NextResponse.json(
            {message : "article deleted"} ,
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


export const PUT = async ( req : Request ,{params} : RouteParams) => {

    if(!process.env.MONGODB_URI) {
        NextResponse.json(
            {error : "DATABASE_URL not existing"},
            {status: 500 }
        )
    }

    if(!ObjectId.isValid(params.id)) {
        return NextResponse.json({
            error : "ID is invalid"
        })
    }

    try {

        const {title , price} = await req.json()

        const data = await updateArticle(params.id , title , price)

        if(data.matchedCount === 0) {
            return NextResponse.json(
                {error : "data not found"},
                {status : 404}
            )
        }

        return NextResponse.json(
            {
                data,
                message : "article updated succesfully"
            } ,
            {status : 200},

        )

    } catch (error) {
        console.log(error)

        return NextResponse.json(
            {error : "server error"},
            {status : 500}
        )
    }
}