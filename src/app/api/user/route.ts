// import { IUserType } from './../../../db/Types/type';
// import { IUserType } from "@/db/Types/type"
import { createUser, getAllUsers } from "@/db/User/userSevice"
import { NextResponse } from "next/server"


export const GET = async (req : Request)  => {

    if(!process.env.MONGODB_URI) {
        return NextResponse.json(
            { 
                message : "server not found",
                ok : false
            },
            {status : 500}
        )
    }

    try {

        const data = await getAllUsers()

        if(!data) {
            return NextResponse.json(
                {
                     message : "any user found!",
                     ok : false
                },
                {status : 404}
            )
        }

        return NextResponse.json(
            {
                ok : true,
                data
            },
            {status : 200}
        )
        
    } catch (error) {
        return NextResponse.json(
            { 
                message : "server error! " + error,
                ok : false
            },
            {status : 500}
        )
    }
}

export const POST = async (req : Request) => {

    if(!process.env.MONGODB_URI) {
        return NextResponse.json(
            { 
                message : "server not found",
                ok : false
            },
            {status : 500}
        )
    }

    try {

        const {name , age , genres , image}  = await  req.json();

        await createUser(name , age, genres , image)

        return NextResponse.json(
            {
                ok : true,
                data : {
                    name , age , genres, image
                }
            },
            {status : 200}
        )
        
    } catch (error) {
        return NextResponse.json(
            { 
                message : "server error! " + error,
                ok : false
            },
            {status : 500}
        )
    }
}