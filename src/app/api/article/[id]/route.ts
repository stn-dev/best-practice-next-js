import { NextResponse } from "next/server"

type RouteParams = {
    params : {
        id: number
    }
}

const getOneArticle = async (id: number) => {
    const res = await fetch(`http://localhost:4000/articles/${id}`)
    const data = await res.json()

    return data
}

// GET
export async function GET (req: Request , {params}:RouteParams) {
    const data = await getOneArticle(params.id)
    console.log(data)
    return NextResponse.json(data)
}

// DELETE
export async function DELETE(req:Request , {params}:RouteParams) {

    fetch(`http://localhost:4000/articles/${params.id}` , {
        method :"DELETE"
    })

    return NextResponse.json({
        message : "article deleted succesfully"
    })
}