import { NextResponse } from "next/server";

const getData = async () => {
   const res = await fetch("http://localhost:4000/articles")
   const data = await res.json()
   return data
}

export async function GET (request : Request)  {

    const data = await getData()

    return NextResponse.json(data)
}

export async function POST (req:Request) {
    
    const {id,title,price} = await req.json()

    const articles = {
        id,
        title,
        price
    }

    await fetch("http://localhost:4000/articles" , {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(articles)
    })

    return NextResponse.json(articles)
}